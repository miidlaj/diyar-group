import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    // <div className="font-[sans-serif] bg-gradient-to-r from-purple-900 via-purple-800 to-purple-600 text-[#333]">
    //   <div className="min-h-screen flex fle-col items-center justify-center lg:p-6 p-4">
    //     <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
    //       <div className="max-md:text-center">
    //         <a href="javascript:void(0)">
    //           <img
    //             src="/logo.png"
    //             alt="logo"
    //             className="w-52 mb-10 inline-block"
    //           />
    //         </a>
    //         <h2 className="text-4xl font-extrabold lg:leading-[50px] text-white">
    //         Escape the ordinary and
    //         </h2>
    //         <p className="text-sm mt-6 text-white">
    //         Escape the ordinary and embrace extraordinary stays with our booking service.
    //         </p>
    //       </div>
    //       <form className="bg-white rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto max-md:mx-auto w-full">
    //         <h3 className="text-3xl font-extrabold mb-12 max-md:text-center">
    //           Sign in
    //         </h3>
    //         <div>
    //           <input
    //             name="email"
    //             type="email"
    //             autoComplete="email"
    //             required
    //             className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
    //             placeholder="Email address"
    //           />
    //         </div>
    //         <div>
    //           <input
    //             name="password"
    //             type="password"
    //             autoComplete="current-password"
    //             required
    //             className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
    //             placeholder="Password"
    //           />
    //         </div>
    //         <div className="text-sm text-right">
    //           <a
    //             href="jajvascript:void(0);"
    //             className="text-blue-600 hover:underline"
    //           >
    //             Forgot your password?
    //           </a>
    //         </div>
    //         <div className="!mt-10">
    //           <button
    //             type="button"
    //             className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-[#222] focus:outline-none"
    //           >
    //             Log in
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div className="h-screen w-screen flex justify-center items-center">
      <Card className="mx-auto max-w-sm w-96">
        <CardHeader className="">
          <CardTitle className="text-xl">Login</CardTitle>
          <CardDescription className="flex justify-center items-center">
            <img
              src="/logo.png"
              alt="logo"
              className="w-10 mb-10 inline-block"
            />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link to="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
