import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return <SignIn
        fallbackRedirectUrl="/dashboard"
        forceRedirectUrl="/dashboard"
        signUpFallbackRedirectUrl="/dashboard"
        signUpForceRedirectUrl="/dashboard"
    />;
}
