import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// ─────────────────────────────────────────────
// 1. SCHEMA
// ─────────────────────────────────────────────

const passwordSchema = z
  .string()
  .min(8, "Password too short")
  .max(64, "Password too long")
  .regex(/[A-Z]/, "Must include uppercase letter")
  .regex(/[a-z]/, "Must include lowercase letter")
  .regex(/[0-9]/, "Must include number")
  .regex(/[^A-Za-z0-9]/, "Must include special character");

export const signupInputSchema = z
  .object({
    fullname: z
      .string()
      .trim()
      .min(2, "Name too short")
      .max(50, "Name too long"),
    username: z
      .string()
      .trim()
      .min(3, "Username too short")
      .max(20, "Username too long")
      .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers and underscores"),
    email: z.string().email("Invalid email").or(z.literal("")).optional(),
    phoneNumber: z
      .string()
      .regex(/^\+?[1-9]\d{7,14}$/, "Invalid phone number")
      .or(z.literal(""))
      .optional(),
    password: passwordSchema,
    dateOfBirth: z
      .string()
      .min(1, "Date of birth is required")
      .refine((val) => {
        const date = new Date(val);
        if (isNaN(date.getTime())) return false;
        const age =
          (Date.now() - date.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
        return age >= 13;
      }, "Must be at least 13 years old"),
    gender: z.enum(["0", "1", "2"]).default("2"),
  })
  .refine((data) => !!(data.email || data.phoneNumber), {
    path: ["email"],
    message: "Either email or phone number is required",
  });

export const signupOutputSchema = signupInputSchema.transform((data) => ({
  ...data,
  username: data.username.toLowerCase(),
  email: data.email ? data.email.toLowerCase() : undefined,
  phoneNumber: data.phoneNumber || undefined,
  dateOfBirth: new Date(data.dateOfBirth),
  gender: Number(data.gender) as 0 | 1 | 2,
}));

export type SignupInput = z.input<typeof signupInputSchema>;
export type SignupOutput = z.output<typeof signupOutputSchema>;

// ─────────────────────────────────────────────
// 2. REUSABLE FIELD WRAPPER
// fix: error prop type is now string | undefined (from react-hook-form's FieldError.message)
// ─────────────────────────────────────────────

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  invalid?: boolean;
  errorMessage?: string;
  className?: string;
}

const FormField = ({
  label,
  children,
  invalid,
  errorMessage,
  className = "",
}: FormFieldProps) => (
  <div className={`flex flex-col gap-0.5 ${className}`}>
    <label className="text-xs font-medium text-muted-foreground">{label}</label>
    {children}
    {invalid && errorMessage && (
      <p className="text-xs text-destructive mt-0.5">{errorMessage}</p>
    )}
  </div>
);

// ─────────────────────────────────────────────
// 3. GENDER SELECT
// ─────────────────────────────────────────────

const GENDER_OPTIONS = [
  { value: "0", label: "Male" },
  { value: "1", label: "Female" },
  { value: "2", label: "Prefer not to say" },
] as const;

const GenderSelect = ({
  className = "",
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    {...props}
    className={`h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
  >
    {GENDER_OPTIONS.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

// ─────────────────────────────────────────────
// 4. SIGNUP COMPONENT
// ─────────────────────────────────────────────

const Signup = () => {
  const form = useForm<SignupInput>({
    resolver: zodResolver(signupInputSchema),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      dateOfBirth: "",
      gender: "2",
    },
    mode: "onBlur",
  });

  const onSubmit = (rawData: SignupInput) => {
    const data: SignupOutput = signupOutputSchema.parse(rawData);
    console.log("Signup data:", data);
    // TODO: API call here
  };

  const { control, formState } = form;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center pb-3 pt-6">
          <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
          <p className="text-sm text-muted-foreground">
            Start your journey with us
          </p>
        </CardHeader>

        <CardContent className="pb-3">
          <form
            id="signup-form"
            onSubmit={form.handleSubmit(onSubmit)}
            noValidate
          >
            <div className="space-y-3">
              {/* ROW 1 — Full Name + Username */}
              <div className="grid grid-cols-2 gap-3">
                <Controller
                  name="fullname"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormField
                      label="Full Name"
                      invalid={fieldState.invalid}
                      errorMessage={fieldState.error?.message}
                    >
                      <Input
                        {...field}
                        placeholder="John Doe"
                        className="h-9"
                      />
                    </FormField>
                  )}
                />
                <Controller
                  name="username"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormField
                      label="Username"
                      invalid={fieldState.invalid}
                      errorMessage={fieldState.error?.message}
                    >
                      <Input
                        {...field}
                        placeholder="john_doe"
                        className="h-9"
                      />
                    </FormField>
                  )}
                />
              </div>

              {/* ROW 2 — Email + Phone */}
              <div className="grid grid-cols-2 gap-3">
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormField
                      label="Email"
                      invalid={fieldState.invalid}
                      errorMessage={fieldState.error?.message}
                    >
                      <Input
                        {...field}
                        type="email"
                        placeholder="john@example.com"
                        className="h-9"
                      />
                    </FormField>
                  )}
                />
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormField
                      label="Phone"
                      invalid={fieldState.invalid}
                      errorMessage={fieldState.error?.message}
                    >
                      <Input
                        {...field}
                        type="tel"
                        placeholder="+91XXXXXXXXXX"
                        className="h-9"
                      />
                    </FormField>
                  )}
                />
              </div>

              {/* ROW 3 — Password */}
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <FormField
                    label="Password"
                    invalid={fieldState.invalid}
                    errorMessage={fieldState.error?.message}
                  >
                    <Input
                      {...field}
                      type="password"
                      placeholder="Min 8 chars, upper, lower, number, symbol"
                      className="h-9"
                    />
                  </FormField>
                )}
              />

              {/* ROW 4 — DOB + Gender */}
              <div className="grid grid-cols-2 gap-3">
                <Controller
                  name="dateOfBirth"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormField
                      label="Date of Birth"
                      invalid={fieldState.invalid}
                      errorMessage={fieldState.error?.message}
                    >
                      <Input {...field} type="date" className="h-9" />
                    </FormField>
                  )}
                />
                <Controller
                  name="gender"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormField
                      label="Gender"
                      invalid={fieldState.invalid}
                      errorMessage={fieldState.error?.message}
                    >
                      <GenderSelect {...field} />
                    </FormField>
                  )}
                />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 pt-2 pb-6">
          <Button
            type="submit"
            form="signup-form"
            className="w-full h-10"
            disabled={formState.isSubmitting}
          >
            {formState.isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Creating account…
              </span>
            ) : (
              "Create Account"
            )}
          </Button>
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-foreground underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
