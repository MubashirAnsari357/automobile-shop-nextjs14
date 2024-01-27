import Link from "next/link";

export default function Dashboard() {
  return (
    <section className="items-center lg:flex font-poppins">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="overflow-x-auto bg-white rounded shadow">
          <div className="flex items-center justify-between border-b border-gray-300 px-6 py-4 pb-4">
            <h2 className="text-xl font-medium ">Home</h2>
            <Link href={"/admin/dashboard/edit"} className="primary-btn">
              Edit Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
