import DefaultLayout from "@/configs/DefaultLayout";

export default function RootBlock() {
  return (
    <DefaultLayout>
      <div className="w-full h-full flex items-center justify-center">
        <h1 className="text-2xl text-center font-bold">Welcome to the CSR Basement!</h1>
      </div>
    </DefaultLayout>
  );
}
