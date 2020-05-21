import React, {useState, useEffect} from 'react';
import Errors from '../errors/errors';


const ArticleForm = ({isLoading, error, initialValues, onFormSubmit}) => {

  const [titleState, setTitleState] = useState(``);
  const [bodyState, setBodyState] = useState(``);
  const [descriptionState, setDescriptionState] = useState(``);
  const [tagListState, setTagListState] = useState(``);

  useEffect(() => {
    if (!initialValues) return;

    const {title, description, body, tagList} = initialValues;
    setTitleState(title);
    setBodyState(body);
    setDescriptionState(description);
    setTagListState(tagList.join(` `));
  }, [initialValues]);

  const handelFormSubmit = (evt) => {
    evt.preventDefault();
    const article = {titleState, descriptionState, bodyState, tagListState};
    onFormSubmit(article);
  };

  const errorMessage = error ? <Errors errors={error.data.errors} /> : null;

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            {errorMessage}
            <form onSubmit={handelFormSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article title"
                    value={titleState}
                    onChange={(evt) => setTitleState(evt.target.value)} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="What is this article about?"
                    value={descriptionState}
                    onChange={(evt) => setDescriptionState(evt.target.value)} />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                    value={bodyState}
                    onChange={(evt) => setBodyState(evt.target.value)} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter tags"
                    value={tagListState}
                    onChange={(evt) => setTagListState(evt.target.value)} />
                </fieldset>
                <fieldset className="form-group">
                  <button
                    type="submit"
                    className="btn btn-lg pull-xs-right btn-primary"
                    disabled={isLoading}>
                    Publish Article
                  </button>
                </fieldset>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleForm;
