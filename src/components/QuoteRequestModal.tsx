import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface QuoteRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productTitle?: string;
  quantity?: number;
}

const QuoteRequestModal = ({ open, onOpenChange, productTitle, quantity = 1 }: QuoteRequestModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Quote request submitted successfully! We'll contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      onOpenChange(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] p-5">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-lg font-bold">Request a Quote</DialogTitle>
          <DialogDescription className="text-xs">
            Fill out the form below and our team will get back to you with a customized quote.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-2.5">
          <div className="space-y-1">
            <Label htmlFor="product" className="text-xs">Product</Label>
            <Input
              id="product"
              value={productTitle || ""}
              disabled
              className="bg-muted h-8 text-xs py-1.5"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="quantity" className="text-xs">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              value={quantity}
              disabled
              className="bg-muted h-8 text-xs py-1.5"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="name" className="text-xs">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-8 text-xs py-1.5"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="email" className="text-xs">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-8 text-xs py-1.5"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone" className="text-xs">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="h-8 text-xs py-1.5"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="message" className="text-xs">Additional Requirements (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your specific requirements..."
              value={formData.message}
              onChange={handleChange}
              rows={2}
              className="text-xs min-h-[60px] py-1.5"
            />
          </div>

          <DialogFooter className="pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
              className="h-8 text-xs"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-accent hover:shadow-glow text-white h-8 text-xs"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteRequestModal;

