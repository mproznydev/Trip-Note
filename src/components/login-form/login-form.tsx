"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                {...register("email", {
                  required: true,
                  minLength: 6,
                  maxLength: 30,
                })}
              />
              {errors.email && (
                <p role="alert">Email should be 6-30 characters.</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                {...register("password", {
                  pattern: /^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9])[^\s<>]{8,}$/,
                })}
              />
              {errors.password && <p role="alert">Wrong password.</p>}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Login</Button>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
}
