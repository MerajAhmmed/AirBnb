export default function PaymentSection() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Pay with American Express</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Card number"
          className="w-full p-3 border rounded-lg"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Expiration"
            className="p-3 border rounded-lg"
          />
          <input type="text" placeholder="CVV" className="p-3 border rounded-lg" />
        </div>
      </div>
    </section>
  );
}
