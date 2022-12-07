import React, { useEffect } from "react";
import { HomeProps } from "../../types";
import "./Rank.styles.scss";

const Rank = ({ setComponents, setActiveComponent }: HomeProps) => {
  useEffect(() => {
    setComponents(false);
    setActiveComponent("rank");
  }, []);
  return (
    <section className="rankSection">
      <h2 className="sectionName">Ranking</h2>
      <div className="categories">
        <div className="rankItem">
          <span className="categoryName index">#1</span>
          <h3 className="categoryName nickName">TopGraczPl</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#2</span>
          <h3 className="categoryName nickName">TopGraczPl</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#3</span>
          <h3 className="categoryName nickName">TopGraczPl</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#4</span>
          <h3 className="categoryName nickName">TopGraczPl</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#5</span>
          <h3 className="categoryName nickName">TopGraczPldsadwd</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#6</span>
          <h3 className="categoryName nickName">TopGraczPldawdadasdwa</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#7</span>
          <h3 className="categoryName nickName">TopGraczPlasdaww</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#8</span>
          <h3 className="categoryName nickName">TopGraczPlawdadsa</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#9</span>
          <h3 className="categoryName nickName">TopGraczPldawdwaaw</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#10</span>
          <h3 className="categoryName nickName">TopGraczPlsawdwwasda</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#11</span>
          <h3 className="categoryName nickName">TopGraczPldawsadw</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#12</span>
          <h3 className="categoryName nickName">TopGraczPldawsadw</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#13</span>
          <h3 className="categoryName nickName">TopGraczPldawsadw</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#14</span>
          <h3 className="categoryName nickName">TopGraczPldawsadw</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#15</span>
          <h3 className="categoryName nickName">TopGraczPldawsadw</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#16</span>
          <h3 className="categoryName nickName">TopGraczPldawsadw</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#17</span>
          <h3 className="categoryName nickName">TopGraczPldawsadw</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#18</span>
          <h3 className="categoryName nickName">TopGraczPldawsadw</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#19</span>
          <h3 className="categoryName nickName">TopGraczPldawsadw</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#20</span>
          <h3 className="categoryName nickName">TopGraczPldawsadw</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#21</span>
          <h3 className="categoryName nickName">TopGraczPldawsadw</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#22</span>
          <h3 className="categoryName nickName">TopGraczPldawsadw</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#23</span>
          <h3 className="categoryName nickName">TopGraczPldawsadw</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#24</span>
          <h3 className="categoryName nickName">TopGraczPldawsadw</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#25</span>
          <h3 className="categoryName nickName">TopGraczPldawsadw</h3>
        </div>
        <div className="rankItem">
          <span className="categoryName index">#26</span>
          <h3 className="categoryName nickName">TopGraczPldawsadw</h3>
        </div>
      </div>
    </section>
  );
};

export default Rank;
