import Field from "../Field";

export default function BillingAddress({ errors, register }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Billing address</h2>
      <div className="space-y-4">
        <Field error={errors.strreetAddress}>
          <input
            type="text"
            placeholder="Street address"
            className="w-full p-3 border rounded-lg"
            {...register("strreetAddress", {
              required: "Street address is required",
            })}
          />
        </Field>
        <Field error={errors.apt}>
          <input
            type="text"
            placeholder="Apt or suite number"
            className="w-full p-3 border rounded-lg"
            {...register("apt", {
              required: "Apt or suite number is required",
            })}
          />
        </Field>
        <Field error={errors.city}>
          <input
            type="text"
            placeholder="City"
            className="w-full p-3 border rounded-lg"
            {...register("city", {
              required: "City is required",
            })}
          />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field error={errors.state}>
            <input
              type="text"
              placeholder="State"
              className="p-3 border rounded-lg"
              {...register("state", {
                required: "State is required",
              })}
            />
          </Field>
          <Field error={errors.zipCode}>
            <input
              type="text"
              placeholder="ZIP code"
              className="p-3 border rounded-lg"
              {...register("zipCode", {
                required: "ZIP code is required",
              })}
            />
          </Field>
        </div>
      </div>
    </section>
  );
}
