import Link from "next/link";

const EmptyState = () => (
  <div className="text-center text-gray-600 mt-10">
    <p className="text-lg font-medium mb-4">
      We have not found any coaches with these specifications at this time.
    </p>
    <p>
      If you are interested in working as a coach,{" "}
      <Link href="/register" className="text-bc-blue underline">
        Register now!
      </Link>
    </p>
  </div>
);

export default EmptyState;
