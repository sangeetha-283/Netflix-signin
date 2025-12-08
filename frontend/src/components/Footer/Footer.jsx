import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>Questions? Call 000-800-919-1743 (Toll-Free)</p>

      <div className="footer-links">
        <p>FAQ</p>
        <p>Help Center</p>
        <p>Terms of Use</p>
        <p>Privacy</p>
        <p>Cookie Preferences</p>
        <p>Corporate Information</p>
      </div>
      <label for="myDropdown"></label>
<select id="myDropdown" name="myOption">
  <i class="fa-regular fa-language"></i><option value="option1" selected>English</option>
  <option value="option2">Tamil</option>
  <option value="option3">Hindi</option>
</select>
    </div>
  );
}
