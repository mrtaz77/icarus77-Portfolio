import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const Overlay = styled.div<{ leaving: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: #0b0f14;
  overflow: hidden;
  opacity: ${({ leaving }) => (leaving ? 0 : 1)};
  pointer-events: ${({ leaving }) => (leaving ? "none" : "auto")};
  transition: opacity 0.35s ease;
`;

const Bone = styled.div`
  background: linear-gradient(90deg, #161c24 25%, #222b36 37%, #161c24 63%);
  background-size: 800px 100%;
  animation: ${shimmer} 1.4s linear infinite;
  border-radius: 8px;
`;

const Icons = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 64px;
`;

const Win = styled.div`
  position: absolute;
  top: 60px;
  left: 140px;
  width: min(900px, calc(100vw - 180px));
  height: min(560px, calc(100vh - 140px));
  background: #10151c;
  border: 1px solid #1f2933;
  border-radius: 10px;
  padding: 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    left: 12px;
    width: calc(100vw - 24px);
  }
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
`;

const Taskbar = styled(Bone)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 36px;
  border-radius: 0;
`;

const SkeletonScreen: React.FC<{ leaving: boolean }> = ({ leaving }) => (
  <Overlay leaving={leaving} role="status" aria-label="Loading">
    <Icons>
      {[0, 1, 2, 3].map((i) => (
        <IconItem key={i}>
          <Bone style={{ width: 56, height: 56, borderRadius: 12 }} />
          <Bone style={{ width: 44, height: 10 }} />
        </IconItem>
      ))}
    </Icons>
    <Win>
      <Bone style={{ height: 28, width: "100%" }} />
      <Row>
        <Bone style={{ width: 120, height: 120, borderRadius: 14, flexShrink: 0 }} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, paddingTop: 8 }}>
          <Bone style={{ height: 22, width: "45%" }} />
          <Bone style={{ height: 14, width: "70%" }} />
          <Bone style={{ height: 14, width: "55%" }} />
        </div>
      </Row>
      <Grid>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <Bone key={i} style={{ height: 110 }} />
        ))}
      </Grid>
    </Win>
    <Taskbar />
  </Overlay>
);

export default SkeletonScreen;
