import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Dashboard",
    icon: (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M21.33 8.01002L14.78 2.77002C13.5 1.75002 11.5 1.74002 10.23 2.76002L3.67996 8.01002C2.73996 8.76002 2.16996 10.26 2.36996 11.44L3.62996 18.98C3.91996 20.67 5.48996 22 7.19996 22H17.8C19.49 22 21.09 20.64 21.38 18.97L22.64 11.43C22.82 10.26 22.25 8.76002 21.33 8.01002Z"
          fill="#488746"
        />
        <path
          d="M12.5 18.75C12.09 18.75 11.75 18.41 11.75 18V15C11.75 14.59 12.09 14.25 12.5 14.25C12.91 14.25 13.25 14.59 13.25 15V18C13.25 18.41 12.91 18.75 12.5 18.75Z"
          fill="#488746"
        />
      </svg>
    ),
    path: "/dashboard",
    count: false,
  },
  {
    title: "My Farm",
    icon: (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.1663 6.87508V15.0001C17.1663 17.5001 15.6747 18.3334 13.833 18.3334H7.16634C5.32467 18.3334 3.83301 17.5001 3.83301 15.0001V6.87508C3.83301 4.16675 5.32467 3.54175 7.16634 3.54175C7.16634 4.05841 7.37465 4.52508 7.71632 4.86675C8.05799 5.20841 8.52467 5.41675 9.04134 5.41675H11.958C12.9913 5.41675 13.833 4.57508 13.833 3.54175C15.6747 3.54175 17.1663 4.16675 17.1663 6.87508Z"
          fill="#A3C2A2"
          stroke="#292D32"
          stroke-width="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.8337 3.54175C13.8337 4.57508 12.992 5.41675 11.9587 5.41675H9.04199C8.52533 5.41675 8.05864 5.20841 7.71697 4.86674C7.3753 4.52508 7.16699 4.05841 7.16699 3.54175C7.16699 2.50841 8.00866 1.66675 9.04199 1.66675H11.9587C12.4753 1.66675 12.942 1.87508 13.2837 2.21675C13.6253 2.55842 13.8337 3.02508 13.8337 3.54175Z"
          fill="#A3C2A2"
          stroke="#292D32"
          stroke-width="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.16699 10.8333H10.5003"
          stroke="#292D32"
          stroke-width="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.16699 14.1667H13.8337"
          stroke="#292D32"
          stroke-width="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    path: "/my-farm",
    count: false,
  },
  {
    title: "Wallet",
    icon: (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.8337 9.99992V14.1666C18.8337 16.6666 17.167 18.3333 14.667 18.3333H6.33366C3.83366 18.3333 2.16699 16.6666 2.16699 14.1666V9.99992C2.16699 7.73325 3.53366 6.14992 5.65866 5.88325C5.87533 5.84992 6.10033 5.83325 6.33366 5.83325H14.667C14.8837 5.83325 15.092 5.84158 15.292 5.87491C17.442 6.12491 18.8337 7.71659 18.8337 9.99992Z"
          fill="#A3C2A2"
        />
        <path
          d="M15.2925 5.87508C15.0925 5.84175 14.8842 5.83342 14.6675 5.83342H6.33418C6.10085 5.83342 5.87585 5.85009 5.65918 5.88342C5.77585 5.65009 5.94251 5.43342 6.14251 5.23342L8.85085 2.51675C9.99251 1.38341 11.8425 1.38341 12.9842 2.51675L14.4425 3.99176C14.9758 4.51676 15.2592 5.18341 15.2925 5.87508Z"
          fill="#DAE7DA"
        />
        <path
          d="M18.8337 10.4167H16.3337C15.417 10.4167 14.667 11.1667 14.667 12.0834C14.667 13.0001 15.417 13.7501 16.3337 13.7501H18.8337"
          fill="#D9D9D9"
        />
      </svg>
    ),
    path: "/wallet",
    count: false,
  },
  {
    title: "Orders",
    icon: (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.75 22.5C17.7165 22.5 18.5 21.7165 18.5 20.75C18.5 19.7835 17.7165 19 16.75 19C15.7835 19 15 19.7835 15 20.75C15 21.7165 15.7835 22.5 16.75 22.5Z"
          fill="#488746"
          fill-opacity="0.5"
        />
        <path
          d="M8.75 22.5C9.7165 22.5 10.5 21.7165 10.5 20.75C10.5 19.7835 9.7165 19 8.75 19C7.7835 19 7 19.7835 7 20.75C7 21.7165 7.7835 22.5 8.75 22.5Z"
          fill="#488746"
          fill-opacity="0.5"
        />
        <path
          opacity="0.4"
          d="M5.34 3.94L5.14 6.39C5.1 6.86 5.47 7.25 5.94 7.25H21.25C21.67 7.25 22.02 6.92999 22.05 6.50999C22.18 4.73999 20.83 3.3 19.06 3.3H6.78999C6.68999 2.86 6.48999 2.44 6.17999 2.09C5.68999 1.56 4.99 1.25 4.27 1.25H2.5C2.09 1.25 1.75 1.59 1.75 2C1.75 2.41 2.09 2.75 2.5 2.75H4.24001C4.55001 2.75 4.84 2.88001 5.05 3.10001C5.26 3.33001 5.36 3.63 5.34 3.94Z"
          fill="#488746"
          fill-opacity="0.5"
        />
        <path
          d="M21.0101 8.75H5.67006C5.25006 8.75 4.91005 9.07 4.87005 9.48L4.51005 13.83C4.37005 15.53 5.71006 17 7.42006 17H18.5401C20.0401 17 21.3601 15.77 21.4701 14.27L21.8001 9.60001C21.8401 9.14001 21.4801 8.75 21.0101 8.75Z"
          fill="#488746"
          fill-opacity="0.5"
        />
      </svg>
    ),
    path: "/orders",
    count: false,
  },
  {
    title: "Profile",
    icon: (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M12.5 22.01C18.0228 22.01 22.5 17.5329 22.5 12.01C22.5 6.48716 18.0228 2.01001 12.5 2.01001C6.97715 2.01001 2.5 6.48716 2.5 12.01C2.5 17.5329 6.97715 22.01 12.5 22.01Z"
          fill="#488746"
          fill-opacity="0.5"
        />
        <path
          d="M12.5 6.93994C10.43 6.93994 8.75 8.61994 8.75 10.6899C8.75 12.7199 10.34 14.3699 12.45 14.4299C12.48 14.4299 12.52 14.4299 12.54 14.4299C12.56 14.4299 12.59 14.4299 12.61 14.4299C12.62 14.4299 12.63 14.4299 12.63 14.4299C14.65 14.3599 16.24 12.7199 16.25 10.6899C16.25 8.61994 14.57 6.93994 12.5 6.93994Z"
          fill="#488746"
          fill-opacity="0.5"
        />
        <path
          d="M19.2802 19.36C17.5002 21 15.1202 22.01 12.5002 22.01C9.88022 22.01 7.50021 21 5.72021 19.36C5.96021 18.45 6.61022 17.62 7.56021 16.98C10.2902 15.16 14.7302 15.16 17.4402 16.98C18.4002 17.62 19.0402 18.45 19.2802 19.36Z"
          fill="#488746"
          fill-opacity="0.5"
        />
      </svg>
    ),
    path: "/profile",
    count: false,
  },
];

export default menu;
