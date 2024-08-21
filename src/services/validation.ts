import { z } from "zod";

const invalid_type_error = "Valeur saisie invalide";
const required_error = "Ce champs est requis";

export const datasetSchema = z.object({
  name: z
    .string({ invalid_type_error, required_error })
    .min(1, "requis")
    .min(3, "Valeur trop courte"),
  email: z
    .string({ invalid_type_error, required_error })
    .email("Rensignez une adresse mail valide")
    .min(1, "Valeur trop courte"),
  object: z
    .string({ invalid_type_error, required_error })
    .max(100)
    .min(1, "Valeur trop courte"),
  message: z
    .string({ invalid_type_error, required_error })
    .max(170)
    .min(1, "Valeur trop courte"),
});

export type DatasetSchema = z.infer<typeof datasetSchema>;
export type FormErrors = Partial<Record<keyof DatasetSchema, string>>;
