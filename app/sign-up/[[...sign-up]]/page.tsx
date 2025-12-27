import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container py-5" style={{ paddingTop: 140 }}>
      <div className="d-flex justify-content-center">
        <SignUp afterSignInUrl="/admin" afterSignUpUrl="/admin" />
      </div>
    </div>
  );
}
