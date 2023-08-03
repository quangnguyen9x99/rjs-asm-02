import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Truyền thuộc tính - lấy tất cả các thuộc tính của đối tượng props.input và đưa chúng vào tag <input>.
      Giúp cho việc chuyển đổi giữa các đối tượng trở nên dễ dàng hơn, nếu cần thêm hoặc xóa bất kỳ thuộc tính nào thì chỉ cần thay đổi đối tượng props.input mà không cần thay đổi mã trong tag <input> */}
      <input ref={ref} id={props.input.id} {...props.input} />
    </div>
  );
});

export default Input;
