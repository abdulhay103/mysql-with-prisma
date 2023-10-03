import Link from "next/link";

export default function Login() {
    return (
        <main className="  bg-gradient-to-tr from-white via-gray-100 to-green-100">
            <div className=" min-h-screen inset-0 flex justify-center items-center px-6 py-14">
                <div className=" w-full md:lg:w-1/3 rounded-lg border-slate-400 bg-white py-8 px-6 md:lg:px-10 flex flex-col items-center">
                    <h3 className=" text-2xl font-bold pb-8 text-green-500">
                        User Login
                    </h3>
                    <div className=" flex flex-col gap-8 w-full">
                        <input
                            className=" px-5 py-3 ring-2 rounded ring-gray-300 focus:outline-none"
                            type="text"
                            name="name"
                            id="#"
                            placeholder="Email"
                            required
                        />
                        <input
                            className=" px-5 py-3 ring-2 rounded ring-gray-300 focus:outline-none"
                            type="password"
                            name="name"
                            id="#"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button
                        className="px-8 mt-8 py-3 border border-green-500 bg-green-500 text-white text-lg font-semibold rounded-md hover:bg-transparent hover:text-black"
                        type="submit"
                    >
                        Login
                    </button>
                    <p className=" text-gray-600 text-lg py-3">
                        If you aren&lsquo;t registered ?
                        <Link
                            href="/register"
                            className=" px-3 underline cursor-pointer text-orange-400"
                        >
                            Click Here!
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
