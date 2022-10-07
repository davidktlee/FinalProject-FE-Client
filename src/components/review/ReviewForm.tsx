import Button from '../common/Button'

interface ReviewFormProps {
  onClose: Function
  isModalOpen: boolean
}

const ReviewForm = ({ onClose, isModalOpen }: ReviewFormProps) => {
  if (!isModalOpen) return <></>

  return (
    <>
      {isModalOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="w-[900px] h-[700px] border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">리뷰작성</h3>
                </div>

                <form className="relative p-6 flex-auto">
                  <textarea cols={70} rows={10}></textarea>
                </form>

                <div className="flex items-center justify-center gap-2 p-6 border-t border-solid border-slate-200 rounded-b">
                  <Button onClick={() => onClose()} bgColor="white">
                    <span>취소</span>
                  </Button>
                  <Button onClick={() => onClose()} bgColor="dark">
                    <span>작성</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default ReviewForm
