import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return <SignUp
        fallbackRedirectUrl="/dashboard"
        forceRedirectUrl="/dashboard"
        signInFallbackRedirectUrl="/dashboard"
        signInForceRedirectUrl="/dashboard"
    />;
}
