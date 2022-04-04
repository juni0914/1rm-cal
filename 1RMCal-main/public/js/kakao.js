

function kakaoShare(){
  const url = 'https://rm-cal.web.app';
  Kakao.Link.sendDefault({
    objectType: 'feed',
      content: {
        title: '1RM 계산기',
        description: '#헬스 #3대운동 #보디빌딩 #바디프로필',
        imageUrl: 'https://i.ibb.co/hm13S2D/og-image.webp',
        link: {
          mobileWebUrl: url,
          webUrl: url
        }
      },

      buttons: [
          {
            title: '사이트로 이동하기!',
            link: {
              mobileWebUrl: url,
              webUrl: url
        },
      },
    ]
  });
}
