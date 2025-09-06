export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">What are your payment options?</h2>
          <p className="text-gray-600">We accept all major credit and debit cards, as well as Venmo, PayPal, cash, and check. Payment is due at the time of service.</p>
        </div>
        <div className="mb-8 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">What is your cancellation policy?</h2>
          <p className="text-gray-600">We understand that things come up. We ask that you give us at least 24 hours notice if you need to cancel or reschedule your appointment. Cancellations made with less than 24 hours notice may be subject to a cancellation fee.</p>
        </div>
        <div className="mb-8 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Do you have a satisfaction guarantee?</h2>
          <p className="text-gray-600">Your satisfaction is our top priority. If you are not completely satisfied with our services, please contact us within 24 hours of your cleaning and we will make it right.</p>
        </div>
      </div>
    </div>
  );
}