import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    queryType: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, queryType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus("success");
        
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
          queryType: ""
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus("error");
        console.error('Form submission error:', data.message);
        
        // Clear error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus("error");
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout
      title="Contact Us"
      description="Contact Nirmal Autotech Industries for inquiries about our precision manufacturing services, product information, or partnership opportunities."
    >
        <main className="flex-1 py-16 px-4 bg-alternate-light">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 gradient-text">Contact Us</h1>
              <div className="flex justify-center mb-6">
                <div className="badge-featured animate-float">Get in Touch</div>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions about our products or services? Reach out to us and our team will be happy to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="colored-shadow card-hover-effect">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="bg-gradient-blue rounded-full p-3 mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">Our Location</h3>
                  <p className="text-muted-foreground">
                    Plot No. 24, Near Jind Railway Crossing Flyover, Rohtak (Haryana) - 124001, India
                  </p>
                </CardContent>
              </Card>

              <Card className="colored-shadow card-hover-effect">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="bg-gradient-turquoise rounded-full p-3 mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">Phone Numbers</h3>
                  <p className="text-muted-foreground">+91-9992009744</p>
                  <p className="text-muted-foreground">+91-7419711707</p>
                </CardContent>
              </Card>

              <Card className="colored-shadow card-hover-effect">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="bg-gradient-orange rounded-full p-3 mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">Email Address</h3>
                  <p className="text-muted-foreground">virenderhooda@nirmalautotech.com</p>
                  <p className="text-muted-foreground">info@nirmalautotech.com</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <Card className="mb-8 colored-shadow">
                  <CardContent className="p-6 bg-gradient-blue/5">
                    <h2 className="text-2xl font-semibold mb-4 gradient-text">Company Information</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-gradient-blue rounded-full p-1.5 mr-3 mt-0.5 flex-shrink-0">
                          <Globe className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-primary">Company Name</h3>
                          <p className="text-muted-foreground">Nirmal Autotech Industries Pvt Ltd</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-gradient-turquoise rounded-full p-1.5 mr-3 mt-0.5 flex-shrink-0">
                          <MapPin className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-primary">Full Address</h3>
                          <p className="text-muted-foreground">
                            Plot No. 24, Near Jind Railway Crossing Flyover, Rohtak (Haryana) - 124001, India
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-gradient-orange rounded-full p-1.5 mr-3 mt-0.5 flex-shrink-0">
                          <Clock className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-primary">Business Hours</h3>
                          <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                          <p className="text-muted-foreground">Sunday: Closed</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-gradient-navy rounded-full p-1.5 mr-3 mt-0.5 flex-shrink-0">
                          <Globe className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium text-primary">Website</h3>
                          <p className="text-muted-foreground">www.nirmalautotech.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="colored-shadow">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 gradient-text">Our Location</h2>
                    <div className="aspect-video w-full rounded-md overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.8060262131384!2d76.56!3d28.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDUyJzEyLjAiTiA3NsKwMzMnMzYuMCJF!5e0!3m2!1sen!2sin!4v1615971479110!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="colored-shadow">
                  <CardContent className="p-6 bg-gradient-blue/5">
                    <h2 className="text-2xl font-semibold mb-6 gradient-text">Send Us a Message</h2>

                    {submitStatus === "success" && (
                      <div className="bg-gradient-blue/10 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-6 animate-fadeIn">
                        Your message has been sent successfully. We'll get back to you soon!
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="bg-gradient-orange/10 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 animate-fadeIn">
                        There was an error sending your message. Please try again later.
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="name" className="block mb-2">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="phone" className="block mb-2">
                            Phone
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>

                        <div>
                          <label htmlFor="company" className="block mb-2">
                            Company
                          </label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label htmlFor="queryType" className="block mb-2">
                          Quick Query Type
                        </label>
                        <Select value={formData.queryType} onValueChange={handleSelectChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select query type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="product_inquiry">Product Inquiry</SelectItem>
                            <SelectItem value="quotation">Request for Quotation</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="career">Career Inquiry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="mb-4">
                        <label htmlFor="subject" className="block mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="message" className="block mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-gradient-blue hover:bg-gradient-blue-light" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="mb-8 colored-shadow">
              <CardContent className="p-6 bg-gradient-blue/5">
                <h2 className="text-2xl font-semibold mb-4 text-center gradient-text">Quality Policy</h2>
                <div className="max-w-3xl mx-auto text-center italic border-l-4 border-r-4 border-gradient-blue px-8 py-4 bg-white rounded-lg">
                  <p className="text-lg">
                    "We at Nirmal Autotech Industries (P) Ltd. are committed to enhance customer satisfaction by consistently providing excellence in Quality, Cost, Delivery & Development through continual improvement of the Quality Management System Performance."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
    </PageLayout>
  );
}