import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import { usePortfolioData } from "../utils/userPortFolioData"; // ปรับ path ให้ตรงโปรเจกต์ของคุณ

export default function Contact() {
  const { data, addMessage } = usePortfolioData();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // จำลอง API delay
    setTimeout(() => {
      addMessage(formData.name, formData.email, formData.message);
      setToastMessage("✅ Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setIsSubmitting(false);

      // ซ่อน toast หลัง 3 วิ
      setTimeout(() => setToastMessage(null), 3000);
    }, 500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0f14] text-[#e2e8f0] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-lg text-[#94a3b8]">
              Have a project in mind? Let’s talk about it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column — Info */}
            <div className="space-y-6">
              {/* Email */}
              <div className="p-6 rounded-2xl bg-[#141620] border border-[#1e293b]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#8b5cf6]/10 rounded-lg">
                    <Mail className="h-6 w-6 text-[#8b5cf6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-[#94a3b8]">
                      {data?.profile?.socials?.find((s) => s.type === "email")
                        ?.url?.replace("mailto:", "") || "alex@example.com"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="p-6 rounded-2xl bg-[#141620] border border-[#1e293b]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#14b8a6]/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#14b8a6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-[#94a3b8]">{data?.profile?.location || "Bangkok, Thailand"}</p>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#8b5cf6]/10 to-[#8b5cf6]/5 border border-[#1e293b]">
                <h3 className="font-semibold mb-2">Quick Response</h3>
                <p className="text-sm text-[#94a3b8]">
                  I typically respond within 24–48 hours. For urgent inquiries,
                  please mention it in your message.
                </p>
              </div>
            </div>

            {/* Right Column — Form */}
            <div className="p-6 rounded-2xl bg-[#141620] border border-[#1e293b]">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-2 rounded-lg bg-[#0f1420] border ${
                      errors.name ? "border-red-500" : "border-[#1e293b]"
                    } focus:outline-none focus:border-[#8b5cf6]`}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-2 rounded-lg bg-[#0f1420] border ${
                      errors.email ? "border-red-500" : "border-[#1e293b]"
                    } focus:outline-none focus:border-[#8b5cf6]`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell me about your project..."
                    className={`w-full px-4 py-2 rounded-lg bg-[#0f1420] border ${
                      errors.message ? "border-red-500" : "border-[#1e293b]"
                    } focus:outline-none focus:border-[#8b5cf6]`}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg cursor-pointer bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-medium flex items-center justify-center gap-2 transition"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Toast */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 bg-[#1e293b] text-white px-4 py-3 rounded-lg shadow-lg">
            {toastMessage}
          </div>
        )}
      </div>
    </div>
  );
}
