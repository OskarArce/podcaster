import "./BaseNProgress.css";

export default function BaseNProgress() {
  return (
    <div class="loader">
      <svg class="circular">
        <circle
          class="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke-width="5"
          stroke-miterlimit="10"
        ></circle>
      </svg>
    </div>
  );
}
