import React, { useEffect } from 'react';

const Frontend = () => {
  useEffect(() => {
    // Fetch progress values from the data-progress attribute and set the progress for each element
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(progressBar => {
      const progressValue = progressBar.dataset.progress;
      progressBar.style.width = progressValue;
    });
  }, []);
  return (
    


    <div className="skills__content">
        <h3 className="skills__title">Frontend developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">HTML</h3>
                    
                                <div class="progress-bar">
            <div class="progress" data-progress="75%"></div>
        </div>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">CSS</h3>
                                <div class="progress-bar">
            <div class="progress" data-progress="75%"></div>
        </div>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">JAVSCRIPT</h3>
                                <div class="progress-bar">
            <div class="progress" data-progress="85%"></div>
        </div>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">BOOTSTRAP / TAILWIND </h3>
                                <div class="progress-bar">
            <div class="progress" data-progress="65%"></div>
        </div>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">GIT</h3>
                                <div class="progress-bar">
            <div class="progress" data-progress="75%"></div>
        </div>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">REACT</h3>
                                <div class="progress-bar">
            <div class="progress" data-progress="80%"></div>
        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Frontend