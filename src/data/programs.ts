export type ProgramItem = {
  target: string
  title: string
  description: string
}

export type ProgramSession = {
  month: number
  date: string
  type: '같이' | '따로' | '같이+따로'
  icon: string
  together?: ProgramItem[]
  adult?: ProgramItem[]
  child?: ProgramItem[]
}

export const programs: ProgramSession[] = [
  {
    month: 5,
    date: '5월 16일 (토) 오후 2시',
    type: '같이+따로',
    icon: '🎩',
    together: [
      {
        target: '온 가족',
        title: '환상의 마술쇼',
        description: '우리 가족, 다 함께 웃으며 마음을 활짝 열어요',
      },
    ],
    adult: [
      {
        target: '부모',
        title: '쉼 명상',
        description:
          '몸과 마음의 완전한 휴식, 고요함 속에서 내 마음의 소리를 들어보아요',
      },
    ],
    child: [
      {
        target: '아이들',
        title: '꼬마 마술사 체험',
        description:
          '수리수리 마수리! 마술사가 되어 마술 놀이로 하나가 되어요',
      },
    ],
  },
  {
    month: 6,
    date: '6월 20일 (토) 오후 2시',
    type: '따로',
    icon: '🧠',
    adult: [
      {
        target: '부모',
        title: '육아 멘토링 & 싱잉볼 테라피',
        description:
          '"김경민 소아정신과 전문의"에게 듣는 명쾌한 육아 해답, "낳고, 기르고, 사랑하라"',
      },
    ],
    child: [
      {
        target: '아이들',
        title: '동화 속으로 풍덩 & 마술 놀이 II',
        description:
          '재미있는 동화구연에 귀 기울이고, 신기한 마술로 상상력을 키워보아요',
      },
    ],
  },
  {
    month: 7,
    date: '7월 11일 (토) 오후 2시',
    type: '따로',
    icon: '🍵',
    adult: [
      {
        target: '부모',
        title: '바디 & 티(Tea) 힐링',
        description:
          '맞춤형 PT와 네일케어로 굳은 몸을 풀고, 따뜻한 차 명상으로 여유를 마셔요',
      },
    ],
    child: [
      {
        target: '아이들',
        title: '조물조물 꼬마 요리사',
        description:
          '내 손으로 직접 요리하며 오감을 깨우는 맛있는 쿠킹 클래스',
      },
    ],
  },
  {
    month: 9,
    date: '9월 12일 (토) 오후 2시',
    type: '따로',
    icon: '🌕',
    adult: [
      {
        target: '부모',
        title: '마음을 담은 가훈 쓰기',
        description:
          '풍성한 한가위, 캘리그라피로 우리 가족만의 예쁜 다짐을 적어보아요',
      },
    ],
    child: [
      {
        target: '아이들',
        title: '달토끼의 쫀득쫀득 송편 빚기',
        description:
          '다가오는 추석, 고사리 같은 손으로 예쁘고 맛있는 송편을 만들어요',
      },
    ],
  },
  {
    month: 10,
    date: '10월 17일 (토) 오후 2시',
    type: '같이',
    icon: '💕',
    together: [
      {
        target: '온 가족',
        title: '우리 가족 마음 연결고리',
        description:
          '전문가와 함께하는 놀이와 소통으로 엄마, 아빠, 아이의 마음을 따뜻하게 이어주어요',
      },
    ],
  },
  {
    month: 11,
    date: '11월 21일 (토) 오후 2시',
    type: '따로',
    icon: '🌳',
    adult: [
      {
        target: '부모',
        title: '"아이 마음 번역기" 가동하기',
        description:
          '대화 소통 전문가에게 배우는, 우리 아이와 진짜로 통(通)하는 마법의 대화법',
      },
    ],
    child: [
      {
        target: '아이들',
        title: "'좋은 마음 펜션' 숲속 창의 놀이터",
        description:
          '신나는 에어바운스와 숲 체험, 놀이까지! 맑은 자연 속에서 맘껏 뛰놀며 몸도 마음도 튼튼',
      },
    ],
  },
  {
    month: 12,
    date: '12월 12일 (토) 오후 2시',
    type: '같이',
    icon: '🎄',
    together: [
      {
        target: '온 가족',
        title: '해피 엔딩, 그리고 새로운 시작',
        description:
          '온 가족이 함께 달콤한 연말 케이크를 만들며 올 한 해를 따뜻하게 마무리하는 송년 파티',
      },
    ],
  },
]
