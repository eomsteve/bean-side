import { FC } from 'react';
// header 추가

interface GeneralLayoutProps {
  children: React.ReactNode;
}
const GeneralLayout: FC<GeneralLayoutProps> = ({ children }) => {
  return (
    <div className="general-layout">
      <div className="general-layout__body">{children}</div>
    </div>
  );
};

export default GeneralLayout;
