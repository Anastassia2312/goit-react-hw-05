import { InfinitySpin } from "react-loader-spinner";
export default function Loader() {
  return (
    <InfinitySpin
      visible={true}
      width="200"
      color="#FF5F15"
      ariaLabel="infinity-spin-loading"
    />
  );
}
