import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Check, Loader2, AlertCircle } from "lucide-react";
import { submitLead } from "@/lib/api";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsappCountryCode: "",
    whatsappNumber: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await submitLead({
        fullName: formData.fullName,
        email: formData.email,
        whatsappCountryCode: formData.whatsappCountryCode,
        whatsappNumber: formData.whatsappNumber,
      });

      setSubmitted(true);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        whatsappCountryCode: "",
        whatsappNumber: "",
      });

      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setSubmitted(false);
      setError(null);
      setFormData({
        fullName: "",
        email: "",
        whatsappCountryCode: "",
        whatsappNumber: "",
      });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Started with DattaPay</DialogTitle>
          <DialogDescription>
            Join thousands of global freelancers. Fill out the form below to get your invite.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground">You're on the list!</h3>
            <p className="text-muted-foreground">We'll be in touch via WhatsApp shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-6 py-4">
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                placeholder="Mateo Rossi" 
                required 
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                disabled={loading}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="mateo@example.com" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={loading}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="whatsapp">WhatsApp Number</Label>
              <div className="flex gap-2">
                <Input 
                  id="country-code" 
                  placeholder="+54" 
                  className="w-20" 
                  required 
                  value={formData.whatsappCountryCode}
                  onChange={(e) => setFormData({ ...formData, whatsappCountryCode: e.target.value })}
                  disabled={loading}
                />
                <Input 
                  id="whatsapp" 
                  placeholder="9 11 1234 5678" 
                  className="flex-1" 
                  required 
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  disabled={loading}
                />
              </div>
              <p className="text-[0.8rem] text-muted-foreground">Include country code (e.g., +54 for Argentina)</p>
            </div>

            <Button 
              type="submit" 
              className="w-full text-base h-11 mt-2" 
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Request Access"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
