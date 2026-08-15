const toggleButton = document.getElementById("toggleRoadmap");
const roadmap = document.getElementById("roadmap");
const check = document.querySelector(".study-check");
const statusText = document.getElementById("statusText");

if (toggleButton && roadmap) {
  toggleButton.addEventListener("click", () => {
    roadmap.classList.toggle("hidden");
    toggleButton.textContent = roadmap.classList.contains("hidden")
      ? "로드맵 펼치기"
      : "로드맵 접기";
  });
}

if (check && statusText) {
  check.addEventListener("change", () => {
    statusText.textContent = check.checked
      ? "좋아요! 오늘 학습 목표를 달성했어요."
      : "아직 체크하지 않았어요.";
  });
}
