const toggleButton = document.getElementById("toggleRoadmap");
const roadmap = document.getElementById("roadmap");
const check = document.getElementById("studyCheck");
const statusText = document.getElementById("statusText");

if (toggleButton && roadmap) {
  const syncRoadmapState = () => {
    const isExpanded = !roadmap.classList.contains("hidden");
    toggleButton.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    toggleButton.textContent = isExpanded ? "로드맵 접기" : "로드맵 펼치기";
  };

  syncRoadmapState();

  toggleButton.addEventListener("click", () => {
    roadmap.classList.toggle("hidden");
    syncRoadmapState();
  });
}

if (check && statusText) {
  check.addEventListener("change", () => {
    statusText.textContent = check.checked
      ? "좋아요! 오늘 학습 목표를 달성했어요."
      : "아직 체크하지 않았어요.";
  });
}
