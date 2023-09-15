import CourseList from "./components/CourseList";
import Cart from "./components/Cart";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);

  const handleAddCart = (course_name, price, credit) => {
    const isExist = cart.find((name) => {
      return name === course_name;
    });

    if (isExist) return;

    const course = {
      course_name,
      price,
      credit,
    };

    const totalCredit = cart.reduce(
      (prev, curr) => prev + curr.credit,
      +credit
    );
    const totalPrice = cart.reduce((prev, curr) => prev + curr.price, +price);

    if (totalCredit > 20) {
      toast("Error!! Exceed credit limit (20)", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "dark",
        type: "error",
      });

      toast(
        "Error: You have exhausted your available hours. Please remove items from your schedule or adjust your selections",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: "dark",
          type: "error",
        }
      );

      return;
    }

    setTotalCredit(totalCredit);
    setTotalPrice(totalPrice);

    setCart([...cart, course]);
  };

  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <div className="mx-auto mx-w-[1440px] w-[90%] flex justify-center flex-col items-center">
        <h1 className="text-xl sm:text-3xl mt-4 mb-16 font-bold text-[#1C1B1B]">
          Course Registration
        </h1>

        <div className="flex flex-col justify-center w-full gap-4 lg:flex-row">
          <CourseList handleAddCart={handleAddCart} />
          <Cart totalPrice={totalPrice} totalCredit={totalCredit} cart={cart} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
