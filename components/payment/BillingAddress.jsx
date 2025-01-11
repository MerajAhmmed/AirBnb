export default function BillingAddress() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Billing address</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Street address"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Apt or suite number"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="text"
          placeholder="City"
          className="w-full p-3 border rounded-lg"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="State"
            className="p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="ZIP code"
            className="p-3 border rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
