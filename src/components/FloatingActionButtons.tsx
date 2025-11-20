import { Phone, MessageCircle } from "lucide-react";

const FloatingActionButtons = () => {
  const phoneNumber = "971565686811";
  const whatsappNumber = "971565686811";

  return (
    <>
      {/* Call Button - Left Side */}
      <a
        href={`tel:${phoneNumber}`}
        className="fixed bottom-6 left-6 z-50 group flex items-center justify-center w-14 h-14 bg-[#2E6A92] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#1f4a6b]"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* WhatsApp Button - Right Side */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#20BA5A]"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
};

export default FloatingActionButtons;

