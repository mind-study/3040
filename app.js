// ============================================
//  3040교화 훈련 프로그램 - 앱 스크립트
// ============================================

// ── 공지사항 데이터 (추후 서버/시트 연동 예정) ──
const notices = [
  { badge: "공지", title: "2026년 상반기 훈련 일정 안내", date: "2026-04-01" },
  { badge: "공지", title: "4월 정기 교육 장소 변경 안내", date: "2026-03-28" },
  { badge: "자료", title: "훈련 교재 PDF 업로드 완료", date: "2026-03-20" },
  { badge: "안내", title: "교화 훈련 참가 신청 마감 연장", date: "2026-03-15" },
];

// ── 일정 데이터 ──
const schedules = [
  { month: "4월", day: "12", title: "4월 정기 교육", desc: "오전 10시 | 교당 법당" },
  { month: "4월", day: "26", title: "훈련 오리엔테이션", desc: "오후 2시 | 온라인(Zoom)" },
  { month: "5월", day: "10", title: "상반기 집중 훈련", desc: "종일 | 수련원" },
  { month: "5월", day: "24", title: "소감 나눔의 시간", desc: "오후 3시 | 교당 법당" },
];

// ── 공지사항 렌더링 ──
function renderNotices() {
  const list = document.getElementById("notice-list");
  if (!list) return;
  list.innerHTML = notices.map(n => `
    <div class="notice-item">
      <span class="badge">${n.badge}</span>
      <span class="title">${n.title}</span>
      <span class="date">${n.date}</span>
    </div>
  `).join("");
}

// ── 일정 렌더링 ──
function renderSchedules() {
  const list = document.getElementById("schedule-list");
  if (!list) return;
  list.innerHTML = schedules.map(s => `
    <div class="schedule-item">
      <div class="date-block">
        <div class="month">${s.month}</div>
        <div class="day">${s.day}</div>
      </div>
      <div class="info">
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
      </div>
    </div>
  `).join("");
}

// ── 초기화 ──
document.addEventListener("DOMContentLoaded", () => {
  renderNotices();
  renderSchedules();
  console.log("3040교화 앱 초기화 완료");
});
