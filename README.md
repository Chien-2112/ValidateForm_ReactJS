Trong Repo này, chúng ta sẽ cùng tìm hiểu về cách tạo Form trong React với 2 cách: dùng Hooks của React(useState, useEffect) hoặc dùng Formik. Và cách xác thực Form thông qua Yup cùng Formik.

# FORMIK & YUP.
+. Formik & Yup là 2 thư viện phổ biến trong React để quản lý form và validate dữ liệu.

# VAI TRÒ.
+. _Formik_:
  - Quản lý state của form.
  - Xử lý sự kiện onChange, onSubmit.
  - Cung cấp các phương thức validate dữ liệu.
  - Giảm thiểu boilerplayte code khi làm việc với form.

+. _Yup_:
  - Nó thường được sử dụng kết hợp với Formik để k.tra tính hợp lệ của DL form.
  - Định nghĩa schema rõ ràng cho việc validate.
  - Hỗ trợ nhiều kiểu DL: chuỗi, số, boolean, mảng, object,...
  - Có sẵn nhiều phương pháp validate(regex, min, max, required,...)

# useFormik().
+. Là 1 hook được cung cấp bởi thư viện Formik để quản lý form trong React.

useFormik() nhận vào 1 object với 4 value: 
  1. initialValues: {} - Giá trị khởi tạo cho form.
  2. validationSchema: {} - Tùy chọn. Schema để validate form (thường dùng với Yup).
  3. validate: (values) => {} - Tùy chọn. Hàm validate custom.
  4. onSubmit: (values) => {} - Hàm xử lý khi form được submit.

# ƯU ĐIỂM.
+. Khi sử dụng formik, formik.handleSubmit sẽ tự động:
  - Ngăn chặn hành vi mặc định của form: Khi nhấn submit => Formik sẽ tự động gọi event.preventDefault() để tránh trình duyệt reload lại trang.

  - Các giá trị từ các trường input sẽ được thu thập vào object formik.values.

  - Nếu có validationSchema => Formik sẽ chạy validate trước. Nếu có lỗi, Formik sẽ gán lỗi vào object Formik.errors và không gọi hàm onSubmit.

  - Nếu không có lỗi nào được tìm thấy, Formik sẽ gọi hàm handleSubmit, truyền toàn bộ dữ liệu trong formik.values vào.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
