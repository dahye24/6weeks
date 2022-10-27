![KakaoTalk_Photo_2022-10-21-18-04-36](https://user-images.githubusercontent.com/112174727/197164876-c3a2504c-16f5-4de7-b138-88bd47583073.jpeg)

# 🚢항해9기 6주차 미니 프로젝트 <멍냥>🐶🐱
반려동물을 키우는 반려인들이 직접 보고 사고 써본 반려동물 관련 용품들의 찐 후기를 다루는 SNS 서비스를 컨셉으로 기획하고 구현해보았습니다.  

## 🖼프론트 Git
[Front Git](https://github.com/MiraeKim1031/miniproject-fe)

## 🫂크루원 정보
|이름|포지션|깃주소|
|:---|:---|---------:|
|김연석|BE|[tastekim](https://github.com/tastekim)|
|최윤진|BE|[yunjin5450](https://github.com/yunjin5450)|
|임다혜|BE|[dahye24](https://github.com/dahye24)|
|김미래|FE|[MiraeKim1031](https://github.com/MiraeKim1031)|
|이현하|FE|[Forza5](https://github.com/Forza5)|. 
  
## 🔍ERD
![ERD](../../../../Downloads/drawSQL-export-2022-10-27_18_36.png)

## 📝서버 내용 요약
* `Node.js`의 `Express` 프레임워크를 사용해서 서버 구현.
* RDS 를 이용한 MySQL 사용.
* MySQL Associate 씨름 중;
* 로직을 controller/service/repository 3가지 역할로 나누어 Layered Architecture pattern 구현.
* `bcryto`를 사용해서 사용자 정보 유출 방지 및 `JWT` 를 활용한 login 및 서비스 제한.
* `Nginx`을 활용해서 revers proxy 서버 구축 및 https 통신 설정.
