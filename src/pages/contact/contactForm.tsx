import { useState } from "react";
import Input from "../../components/inputs/Input";
import Textarea from "../../components/inputs/Textarea";
import {
  DatasetSchema,
  FormErrors,
  datasetSchema,
} from "../../services/validation";
import { z } from "zod";

export default function ContactForm() {
  const [formData, setFormData] = useState<Partial<DatasetSchema>>({});
  console.log(formData);
  const formatZodValidationError = (
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    zodError: z.ZodError<Record<string, any>>,
  ): Partial<Record<string, string>> => {
    return Object.entries(zodError.flatten().fieldErrors).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value?.[0] }),
      {},
    );
  };

  const [errors, setErrors] = useState<FormErrors>({});

  const formattedData = Object.entries(formData).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value.trim() }),
    {},
  );

  const validation = datasetSchema.safeParse(formattedData);
  console.log(validation.error?.flatten());

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    /*const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const validatedForm = datasetSchema.parse(data);
      console.log(validatedForm);
    } catch (err) {
      console.log(err);
    }*/

    const data = Object.fromEntries(new FormData(e.currentTarget));

    if (validation.success === false) {
      setErrors(formatZodValidationError(validation.error));
      const res = datasetSchema.safeParse(data);
      console.log(res);

      console.log("erreur de champs");
      console.log(errors.name);

      return;
    }

    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Object:  ${formData.object}, Message: ${formData.message}`,
    );
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="py-12">
      <form onSubmit={handleSubmit}>
        <div className="mb-6 flex flex-col gap-6">
          <div className="flex gap-4">
            <div className="w-1/2">
              <Input
                className="w-full"
                label="Nom"
                name="name"
                value={formData.name}
                error={errors.name}
                onChange={(e) => handleChange("name", e.currentTarget.value)}
                required
              />
            </div>
            <div className="w-1/2">
              <Input
                className="w-full"
                label="E-mail"
                name="email"
                value={formData.email}
                error={errors.email}
                onChange={(e) => handleChange("email", e.currentTarget.value)}
                required
              />
            </div>
          </div>
          <div>
            <Input
              className="w-full"
              label="object"
              name="object"
              value={formData.object}
              error={errors.object}
              onChange={(e) => handleChange("object", e.currentTarget.value)}
              required
            />
          </div>
          <Textarea
            label="Décrivez nous votre projet"
            name="message"
            rows={4}
            value={formData.message}
            error={errors.message}
            onChange={(e) => handleChange("message", e.currentTarget.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="rounded-lg border border-transparent bg-black p-4 text-white hover:border-black hover:bg-white hover:text-black"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
