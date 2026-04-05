import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ----------------------
// Validation Schema
// ----------------------

// identifier can be email OR phone OR username
const identifierSchema = z
  .string()
  .min(3, "Identifier must be at least 3 characters")
  .refine((val) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/; // simple Indian phone format
    const usernameRegex = /^[a-zA-Z0-9_]{3,30}$/;

    return (
      emailRegex.test(val) ||
      phoneRegex.test(val) ||
      usernameRegex.test(val)
    );
  }, "Enter a valid email, phone number, or username");

const formSchema = z.object({
  identifier: identifierSchema,
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof formSchema>;

// ----------------------
// Component
// ----------------------

export default function LoginForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
    mode: "onBlur", // better UX + performance
  });

  const onSubmit = async (data: FormData) => {
    // normalize identifier type (important for backend contract)
    let type: "email" | "phone" | "username" = "username";

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.identifier)) {
      type = "email";
    } else if (/^[6-9]\d{9}$/.test(data.identifier)) {
      type = "phone";
    }

    const payload = {
      identifier: data.identifier,
      type,
      password: data.password,
    };

    console.log("Submitting:", payload);

    // Example API call (replace with your service layer)
    // await authService.login(payload)
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[400px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

              {/* Identifier Field */}
              <FormField
                control={form.control}
                name="identifier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email / Phone / Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter email, phone or username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
