import React from "react";
import "../../pages/newBeeMallDetail/newBeeMallDetail.css";


export const QaNewBeeMall: React.FC= () => {
 
  return (
   
    <div>
    <div className="zv-cqa">

        <div className="zv-cqa-step">


            <div className="zv-cqa-step-link">
                <span className="previousPage">前ページ</span>
                <span>全2件</span>
                <span>ページ<span id="currentPageNo">1</span>/5</span>
                <span className="nextPage">次ページ</span>
            </div>
            <div className="zv-select-wrap">

                <select id="zv-cqa-select-sort" className="zv-select" name="sort">
                    <option value="total_yes">トップ評価</option>
                    <option value="created_at" >新しい順</option>
                </select>
            </div>
        </div>
    
        
            <div className="zv-cqa delete">
                <div className="zv-cqa-question">
                    <span className="zv-space">Q. </span>
                    <span className="zv-cqa-step"
                        >この商品は脚を外してロースタイルにすることは可能でしょうか？</span>

                </div>
                <div className="zv-cqa-q-info">
                    <span className="zv-cqa-q-reviewer"
                        >投稿者&nbsp; </span>
                    <span className="zv-cqa-step"
                        >投稿日&nbsp;2021年04月02日</span>
                </div>
                <div className="zv-cqa-answers">

                    <div className="zv-cqa-answer zv-cqa-answer-first">
                        <span className="zv-space">A. </span>
                        <div className="zv-cqa-a-content">
                            <div className="zv-cqa-a-text">

                                <p className="zv-cqa-step" >
                                    脚を取外してのご使用を想定しておりません。床を傷つける恐れがありますので、脚を外してのご使用はお控えください。
                                </p>

                            </div>

                            <div className="zv-cqa-a-info">
                                <span className="zv-space"></span>
                                <span className="zv-cqa-a-reviewer"
                                  >回答者&nbsp;
                                    Nitori-QA-001</span>
                                <span className="zv-cqa-step"
                                  >回答日&nbsp;2021年04月05日</span>
                            </div>
                            <div className="zv-helpful-form" data-answer-id="58746">
                                <span className="zv-space"></span>
                                <span className="zv-error-message"
                                    id="ZVLoginErrorHelpful-58746"
                                   >「参考になった/参考にならなかった」を投稿するにはログインが必要です。</span>
                                <span className="zv-helpful-col">
                                    <span
                                        className="zv-helpful zv-helpful-wrapper zv-helpful-wrapper-yes-58746"
                                        data-count="58746" data-clickable=""
                                        data-answer-id="58746">
                                        <i className="zv-helpful zv-helpful-yes-i"></i>
                                        <span
                                            className="zv-helpful zv-helpful-yes zv-helpful-yes-58746"
                                            data-count="58746"
                                            id="ZVHelpfulYes-58746">参考になった</span>
                                        <span className="zv-cqa-step"
                                         >(0人)</span>
                                    </span>
                                </span>
                                <span className="zv-helpful-col">
                                    <span
                                        className="zv-helpful zv-helpful-wrapper zv-helpful-wrapper-no-58746"
                                        data-count="58746" data-clickable=""
                                        data-answer-id="58746">
                                        <i className="zv-helpful  zv-helpful-no-i"></i>
                                        <span
                                            className="zv-helpful zv-helpful-no zv-helpful-no-58746"
                                            data-count="58746"
                                            id="ZVHelpfulNo-58746">参考にならなかった</span>
                                        <span
                                            className="zv-helpful zv-helpful-num zv-helpful-no-num zv-helpful-no-num-58746"
                                            data-count="58746"
                                            id="ZVHelpfulNoNum-58746">(0人)</span>
                                    </span>
                                </span>
                                <span className="zv-separator">|</span>
                                <div className="zv-popupModal1">
                                    <input type="radio" name="modalPop" id="pop1158746"/>
                                    <label >違反を報告</label>
                                    <input type="radio" name="modalPop" id="pop1258746"/>
                                    <label >CLOSE</label>
                                    <input type="radio" name="modalPop" id="pop1358746"/>
                                    <label >×</label>
                                    <div className="zv-modalPopup2">
                                        <div className="zv-modalPopup3">
                                            <h2 className="zv-modalTitle">違反を報告</h2>
                                            <div className="zv-modalMain">
                                                <p>このコンテンツは不適切であり、削除する必要があると思われる場合は、下のボタンをクリックしてお知らせください。
                                                </p>
                                                <div className="zv-report zv-btn"
                                                    data-post-type="answer"
                                                    data-target-id="58746">違反を報告する</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="zv-cqa-comment">
                                <div className="zv-cqa-comment-actions">
                                    <p className="zv-error-message"
                                        id="ZVLoginErrorComment-58746">
                                        コメントを記入するにはログインが必要です。</p>


                                </div>
                                <div className="zv-cqa-comment-list-body zv-hide">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
  )
};
