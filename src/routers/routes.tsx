import React from "react";
import { Route, Routes } from "react-router-dom";
import WishlistEmpty from "src/components/WishlistEmpty/WishlistEmpty";
import NotFound from "src/components/NotFound/NotFound";
import SplashScreen from "src/components/SplashScreen/SplashScreen";
import Welcome from "src/components/Welcome/Welcome";
import OnBoarding from "src/components/OnBoarding/OnBoarding";
import Wishlist from "src/components/Wishlist/Wishlist";
import EmptyCard from "src/components/EmptyCard/EmptyCard";
import FAQ from "src/components/FAQ/FAQ";
import Successful from "src/components/ResetPassword/Successfully/Successfully";
import EmptyCart from "src/pages/EmptyCart/EmptyCart";
import SuccessfulOrder from "src/components/SuccessfulOrder/SuccessfulOrder";
import Successfull from "src/components/SetPassword/Successfull/Successfull";
import Groceries from "src/components/Groceries/Groceries";
import ActivitiesInfo from "../components/Activities/ActivitiesInfo/ActivitiesInfo";
import DeleteAccount from "../components/DeleteAccount/DeleteAccount";

const SignInPage = React.lazy(() => import("src/components/SignIn/SignIn"));
const SignUpPage = React.lazy(() => import("src/components/SignUp/SignUp"));
const OtpSignin = React.lazy(() => import("src/components/Otp/OtpSignin"));
const OtpSignup = React.lazy(() => import("src/components/Otp/OtpSignup"));
const SetPassword = React.lazy(
  () => import("src/components/SetPassword/SetPassword")
);
const PermissionLayout = React.lazy(
  () => import("src/pages/Permission/Permission")
);
const PermissionLocation = React.lazy(
  () => import("src/components/Permission/Permission")
);
const PermissionSetting = React.lazy(
  () => import("src/components/Permission/PermissionSetting")
);
const MapLocation = React.lazy(
  () => import("src/components/Permission/MapLocation/MapLocation")
);
const Delivery = React.lazy(
  () => import("src/components/Permission/Delivery/Delivery")
);
const Search = React.lazy(() => import("src/components/Search/Search"));
const ProductDetails = React.lazy(
  () => import("src/components/ProductDetails/ProductDetails")
);
const Reviews = React.lazy(() => import("src/components/Reviews/Reviews"));

const Home = React.lazy(() => import("../components/Home/Home"));

const MyCart = React.lazy(() => import("../components/MyCart/MyCart"));

const PaymentManagement = React.lazy(
  () => import("../components/PaymentManagement/PaymentManagement")
);

const CheckoutConfirm = React.lazy(
  () => import("src/components/CheckoutConfirm/CheckoutConfirm")
);

const AddCard = React.lazy(() => import("src/components/AddCard/AddCard"));
const ProfileInformation = React.lazy(
  () => import("src/components/ProfileInformation/ProfileInformation")
);
const ProfileInformationSuccess = React.lazy(
  () =>
    import("src/components/ProfileInformationSuccess/ProfileInformationSuccess")
);
const ProfileSuccess = React.lazy(
  () => import("src/components/ProfileSuccess/ProfileSuccess")
);
const ProfileChangePassword = React.lazy(
  () => import("src/components/ProfileChangePassword/ProfileChangePassword")
);
const ReferFriends = React.lazy(
  () => import("src/components/ReferFriends/ReferFriends")
);
const ProfileLocation = React.lazy(
  () => import("src/components/ProfileLocation/ProfileLocation")
);
const ProfileMap = React.lazy(
  () => import("src/components/ProfileLocation/ProfileMap/ProfileMap")
);

const YourOrder = React.lazy(
  () => import("src/components/YourOrder/YourOrder")
);

const Term = React.lazy(() => import("src/components/Term/Term"));
const ResetPasswordLayout = React.lazy(
  () => import("src/pages/ResetPassword/ResetPassword")
);
const RequireAuth = React.lazy(
  () => import("../components/common/RequireAuth")
);
const ResetPassword = React.lazy(
  () => import("src/components/ResetPassword/ResetPassword")
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signup/otp" element={<OtpSignup />} />
      <Route path="/signin/otp" element={<OtpSignin />} />
      <Route path="/set/pass" element={<SetPassword />} />
      <Route path="/set/password/successfull" element={<Successfull />} />
      <Route path="/permission" element={<PermissionLayout />}>
        <Route index element={<PermissionLocation />} />
      </Route>
      <Route path="/permission/location" element={<PermissionSetting />} />
      <Route path="/permission/maplocation" element={<MapLocation />} />
      <Route path="/permission/delivery" element={<Delivery />} />
      <Route path="/splash" element={<SplashScreen />} />
      <Route path="/onboarding" element={<OnBoarding />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/home/search" element={<Search />} />
      <Route path="/mycart" element={<MyCart />} />

      <Route path="/profile/information" element={<ProfileInformation />} />
      <Route
        path="/profile/information/success"
        element={<ProfileInformationSuccess />}
      />
      <Route
        path="/profile/changePassword"
        element={<ProfileChangePassword />}
      />
      <Route path="/profile/location" element={<ProfileLocation />} />
      <Route path="/profile/map" element={<ProfileMap />} />
      <Route path="/reset/pass" element={<ResetPasswordLayout />}>
        <Route index element={<ResetPassword />} />
      </Route>
      <Route path="/reset/pass/successful" element={<Successful />} />
      <Route path="/product/:id/details" element={<ProductDetails />} />
      <Route path="/reviews" element={<Reviews />} />

      <Route path="/checkout/confirm" element={<CheckoutConfirm />} />
      <Route path="/payment-management/emptycart" element={<EmptyCard />} />
      <Route path="/payment-management" element={<PaymentManagement />} />
      <Route path="/payment-management/addcard" element={<AddCard />} />
      <Route path="/refer" element={<ReferFriends />} />
      <Route path="/emptycart" element={<EmptyCart />} />
      <Route path="/order/success" element={<SuccessfulOrder />} />
      <Route path="/groceries/:id" element={<Groceries />} />
      <Route path="/groceries/:id/search" element={<Search />} />
      <Route path="/wishlist/empty" element={<WishlistEmpty />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/terms-conditions" element={<Term />} />
      <Route path="/faq-help" element={<FAQ />} />
      <Route path="/your/order" element={<YourOrder />} />
      <Route path="/ProfileSuccess" element={<ProfileSuccess />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;
