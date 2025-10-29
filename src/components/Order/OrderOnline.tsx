import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface OrderItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  items: OrderItem[];
  totalPrice: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  deliveryAddress: string;
  specialInstructions?: string;
  status:
    | "pending"
    | "confirmed"
    | "preparing"
    | "out-for-delivery"
    | "delivered";
  orderedAt: string;
}

const recipes = [
  {
    id: 1,
    title: "Greek salad",
    price: 12.99,
    image: "https://i.ibb.co/68c9bLv/greek-salad.jpg",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
  },
  {
    id: 2,
    title: "Bruchetta",
    price: 5.99,
    image: "https://i.ibb.co/317GqZv/Bruchetta.png",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: 4.78,
    image: "https://i.ibb.co/sm6MfcH/desert.jpg",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const OrderOnline: React.FC = () => {
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    deliveryAddress: "",
    specialInstructions: "",
  });

  // Load orders from localStorage on mount
  useEffect(() => {
    const savedOrders = localStorage.getItem("orderHistory");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const handleAddToCart = (recipe: (typeof recipes)[0]) => {
    const existingItem = cart.find((item) => item.id === recipe.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === recipe.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: recipe.id,
          title: recipe.title,
          price: recipe.price,
          quantity: 1,
        },
      ]);
    }
  };

  const handleRemoveFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(id);
    } else {
      setCart(
        cart.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Please add items to cart");
      return;
    }

    const newOrder: Order = {
      id: `ORD-${Date.now()}`,
      items: cart,
      totalPrice: parseFloat(calculateTotal()),
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      customerPhone: formData.customerPhone,
      deliveryAddress: formData.deliveryAddress,
      specialInstructions: formData.specialInstructions,
      status: "confirmed",
      orderedAt: new Date().toISOString(),
    };

    const updatedOrders = [newOrder, ...orders];
    setOrders(updatedOrders);
    localStorage.setItem("orderHistory", JSON.stringify(updatedOrders));

    // Reset form and cart
    setCart([]);
    setFormData({
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      deliveryAddress: "",
      specialInstructions: "",
    });

    setOrderConfirmed(true);
    setShowCheckout(false);

    // Hide confirmation after 3 seconds
    setTimeout(() => setOrderConfirmed(false), 3000);
  };

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "confirmed":
        return "bg-blue-100 text-blue-800";
      case "preparing":
        return "bg-purple-100 text-purple-800";
      case "out-for-delivery":
        return "bg-orange-100 text-orange-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-secondary mb-8">
        Order Online
      </h1>

      {/* Confirmation Message */}
      {orderConfirmed && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-300">
          ✓ Order placed successfully! You will receive a confirmation email
          shortly.
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Menu Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-secondary mb-6">Menu Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {recipe.description}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-primary">
                      Rs. {recipe.price}
                    </span>
                    <Button
                      onClick={() => handleAddToCart(recipe)}
                      className="rounded-md px-4 py-2 bg-primary text-primary-foreground"
                      variant="default"
                      size="sm"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 h-fit sticky top-20">
          <h2 className="text-xl font-bold text-secondary mb-4">
            Shopping Cart
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-600 text-center py-8">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-white p-3 rounded border border-gray-200"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-600">
                        Rs. {item.price} x {item.quantity}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="w-6 h-6 flex items-center justify-center bg-red-100 hover:bg-red-200 text-red-600 rounded text-xs font-bold"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="w-6 h-6 flex items-center justify-center bg-green-100 hover:bg-green-200 text-green-600 rounded text-xs font-bold"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="ml-2 text-red-600 hover:text-red-800 text-sm"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-300 mt-4 pt-4">
                <div className="flex justify-between font-bold text-lg text-gray-800 mb-4">
                  <span>Total:</span>
                  <span>Rs. {calculateTotal()}</span>
                </div>

                <Button
                  onClick={() => setShowCheckout(!showCheckout)}
                  className="w-full rounded-md bg-primary text-primary-foreground"
                  variant="default"
                >
                  {showCheckout ? "Hide Checkout" : "Proceed to Checkout"}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Checkout Form */}
      {showCheckout && cart.length > 0 && (
        <div className="mt-8 bg-white p-6 border border-gray-200 rounded-lg">
          <h2 className="text-2xl font-bold text-secondary mb-6">
            Delivery Details
          </h2>

          <form onSubmit={handlePlaceOrder} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customerName" className="text-sm text-gray-600">
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleFormChange}
                  placeholder="John Doe"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label
                  htmlFor="customerEmail"
                  className="text-sm text-gray-600"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  id="customerEmail"
                  name="customerEmail"
                  value={formData.customerEmail}
                  onChange={handleFormChange}
                  placeholder="john@example.com"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label
                  htmlFor="customerPhone"
                  className="text-sm text-gray-600"
                >
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  id="customerPhone"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleFormChange}
                  placeholder="(+91) 9876543210"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label
                  htmlFor="deliveryAddress"
                  className="text-sm text-gray-600"
                >
                  Delivery Address
                </Label>
                <Input
                  type="text"
                  id="deliveryAddress"
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleFormChange}
                  placeholder="123 Main St, City"
                  required
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="specialInstructions"
                className="text-sm text-gray-600"
              >
                Special Instructions (Optional)
              </Label>
              <textarea
                id="specialInstructions"
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleFormChange}
                placeholder="Any special requests or allergies?"
                rows={3}
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              />
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                className="flex-1 rounded-md bg-primary text-primary-foreground"
                variant="default"
              >
                Place Order
              </Button>
              <Button
                type="button"
                onClick={() => setShowCheckout(false)}
                className="flex-1 rounded-md bg-gray-300 text-gray-800"
                variant="outline"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Order History */}
      {orders.length > 0 && (
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-secondary mb-6">
            Your Orders
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      {order.customerName}
                    </p>
                    <p className="text-sm text-gray-600">
                      Order ID: {order.id}
                    </p>
                    <p className="text-sm text-gray-600">
                      Date: {new Date(order.orderedAt).toLocaleDateString()}
                    </p>
                  </div>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1).replace("-", " ")}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-600 font-semibold mb-1">
                      EMAIL
                    </p>
                    <p className="text-sm text-gray-800">
                      {order.customerEmail}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-600 font-semibold mb-1">
                      PHONE
                    </p>
                    <p className="text-sm text-gray-800">
                      {order.customerPhone}
                    </p>
                  </div>

                  <div className="sm:col-span-2">
                    <p className="text-xs text-gray-600 font-semibold mb-1">
                      DELIVERY ADDRESS
                    </p>
                    <p className="text-sm text-gray-800">
                      {order.deliveryAddress}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-4">
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    Items:
                  </p>
                  <div className="space-y-2">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm text-gray-700"
                      >
                        <span>
                          {item.title} x {item.quantity}
                        </span>
                        <span className="font-semibold">
                          Rs. {(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    Total:
                  </span>
                  <span className="text-lg font-bold text-primary">
                    Rs. {order.totalPrice.toFixed(2)}
                  </span>
                </div>

                {order.specialInstructions && (
                  <div className="mt-4 p-3 bg-blue-50 rounded text-sm text-gray-700">
                    <p className="font-semibold mb-1">Special Instructions:</p>
                    <p>{order.specialInstructions}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderOnline;
