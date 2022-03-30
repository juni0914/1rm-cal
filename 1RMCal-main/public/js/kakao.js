const url = 'https://1rmcalculator-juni0914.netlify.app/';

function kakaoShare(){

  Kakao.Link.sendDefault({
    objectType: 'feed',
      content: {
        title: '1RM 계산기',
        description: '#헬스 #3대운동 #보디빌딩 #1RM #스쿼트 #바디프로필',
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
