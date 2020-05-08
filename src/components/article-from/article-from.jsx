import React, {useState} from 'react';


const ArticleForm = ({errors, initialValues, onFormSubmit}) => {
  const [title, setTitle] = useState(``);
  const [body, setBody] = useState(``);
  const [description, setDescription] = useState(``);
  const [tagList, setTagList] = useState(``);
  const handelFormSubmit = (evt) => {
    evt.preventDefault();
    onFormSubmit({foo: `foo`});
    console.log(`fields`, title, body, description, tagList)
  };

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            BackedErrors
            <form onSubmit={handelFormSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article title"
                    value={title}
                    onChange={(evt) => setTitle(evt.target.value)} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="What is this article about?"
                    value={description}
                    onChange={(evt) => setDescription(evt.target.value)} />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                    value={body}
                    onChange={(evt) => setBody(evt.target.value)} >
                  </textarea>
                </fieldset>

                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter tags"
                    value={tagList}
                    onChange={(evt) => setTagList(evt.target.value)} />
                </fieldset>
                <fieldset className="form-group">
                  <button type="submit" className="btn btn-lg pull-xs-right btn-primary">
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

