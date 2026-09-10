import React from "react";

export default function stepBanner({ children, className, ...props }) {
  return (
    <h2 {...props} className>
      {children}
    </h2>
  );
}

// export default function Button({
//   children,
//   className,
//   variant = "primary",
//   loading,
//   ...props
// }) {
//   return (
//     <button
//       {...props}
//       className={`${styles.btn} ${leagueSpartan.className} ${ubuntu.className} ${styles[variant]} ${className}

//       `}
//     >
//       {children}
//       {loading && <LoaderSpinner className={styles.spinner} />}
//     </button>
//   );
// }
