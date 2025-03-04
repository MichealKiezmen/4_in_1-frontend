
function EncryptTips({showLoginPopUp}) {
  return (
    <div className="text-white px-4 py-10">
        <h4 className="text-center font-bold text-4xl my-4">Tips</h4>

        <div className="px-3">
        <ul className="list-disc">
        <li>If you&apos;ve forgotten your key, there&apos;s no way to recover your file - that&apos;s the power of true encryption</li>
        <li>For extra security, decrypt files only when needed and re-encrypt afterward</li>
        <li>Consider storing encrypted files in multiple locations as backups</li>
        </ul>

        <p className="text-center font-bold text-xl my-2">OR</p>
        <p>you can avoid these issues by creating an account
         and we will handle these problems for you.
         <button className="font-semibold mx-2 hover:opacity-85 hover:font-light" onClick={showLoginPopUp}>sign up now.</button></p>
        </div>


    </div>
  )
}

export default EncryptTips
