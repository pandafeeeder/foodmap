import styled, { keyframes } from "styled-components";

interface LogoProps {
  onClick: () => void;
}

const rainbowLoop = keyframes`
  0% {
    color: #ff00c8;
  }
  25% {
    color: #ff9900;
  }
  50% {
    color: #ffee00;
  }
  75% {
    color: #21EB95;
  }
  100% {
    color: #00B1FC;
  }
`;

const wobbleLoop = keyframes`
  0% {
    transform: translate3d(0px, -1px, 0);
  }
  100% {
    transform: translate3d(0px, 1px, 0);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;
`;

const RainbowCharacter = styled.span<{ delay: number }>`
  animation-delay: ${(props) => props.delay}ms;
  animation-direction: alternate, alternate;
  animation-duration: 2200ms, 555ms;
  animation-iteration-count: infinite, infinite;
  animation-name: ${rainbowLoop}, ${wobbleLoop};
  animation-timing-function: linear, ease-in-out;
  display: inline-block;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
`;

const rainbowText = (text: string) => {
  let delay = -Array.from(text).length * 100;
  return Array.from(text).map((char, index) => {
    return (
      <RainbowCharacter delay={(delay += 100)} key={index}>
        {char}
      </RainbowCharacter>
    );
  });
};

const getRandomFoodEmoji = () => {
  const foodEmoji = [
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "🍌",
    "🍍",
    "🥭",
    "🍎",
    "🍏",
    "🍐",
    "🍑",
    "🍒",
    "🍓",
    "🫐",
    "🥝",
    "🍅",
    "🫒",
    "🥥",
    "🥑",
    "🍆",
    "🥔",
    "🥕",
    "🌽",
    "🌶️",
    "🫑",
    "🥒",
    "🥬",
    "🥦",
    "🫛",
    "🧄",
    "🧅",
    "🫚",
    "🍄",
    "🥜",
    "🫘",
    "🌰",
    "🍞",
    "🥐",
    "🥖",
    "🫓",
    "🥨",
    "🥯",
    "🥞",
    "🧇",
    "🧀",
    "🍖",
    "🍗",
    "🥩",
    "🥓",
    "🍔",
    "🍟",
    "🍕",
    "🌭",
    "🥪",
    "🌮",
    "🌯",
    "🫔",
    "🥙",
    "🧆",
    "🥚",
    "🍳",
    "🥘",
    "🍲",
    "🫕",
    "🥣",
    "🥗",
    "🍿",
    "🧈",
    "🧂",
    "🥫",
    "🍱",
    "🍘",
    "🍙",
    "🍚",
    "🍛",
    "🍜",
    "🍝",
    "🍠",
    "🍢",
    "🍣",
    "🍤",
    "🍥",
    "🥮",
    "🍡",
    "🥟",
    "🥠",
    "🥡",
    "🦪",
    "🍦",
    "🍧",
    "🍨",
    "🍩",
    "🍪",
    "🎂",
    "🍰",
    "🧁",
    "🥧",
    "🍫",
    "🍬",
    "🍭",
    "🍮",
    "🍯",
    "🍼",
    "🥛",
    "☕",
    "🫖",
    "🍵",
    "🍶",
    "🍾",
    "🍷",
    "🍸",
    "🍹",
    "🍺",
    "🍻",
    "🥂",
    "🥃",
    "🫗",
    "🥤",
    "🧋",
    "🧃",
    "🧉",
    "🧊",
    "🥢",
    "🍽️",
    "🍴",
    "🥄",
    "🫙",
  ];

  return foodEmoji[Math.floor(Math.random() * foodEmoji.length)];
};

export const Logo = ({ onClick }: LogoProps) => {
  return (
    <LogoContainer onClick={() => onClick}>
      <span>{getRandomFoodEmoji()}</span>
      <span>{rainbowText("FoodMap")}</span>
      <span>{" 🗺️"}</span>
    </LogoContainer>
  );
};
