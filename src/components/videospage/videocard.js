'use client'
import React, { useState } from "react";

export default function VideoCard({ url }) {
  const [like, setLike] = useState(false);

  return (
    <div className="size-full flex justify-center items-end gap-4">
      <div className="w-[56em] h-125 snap-center cursor-pointer">
        <iframe
          src={url}
          style={{ width: '100%', height: '100%', border: 'none' }}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="rounded-xl"
        />
      </div>
      <div>
        <p onClick={() => setLike(!like)} className="cursor-pointer flex flex-col justify-center items-center text-xs text-gray-400 hover:bg-zinc-900 rounded-md px-1 py-2">
          {like ? (
            <img
              className="size-7"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTI0IDEyYzAgNi42MjctNS4zNzMgMTItMTIgMTJzLTEyLTUuMzcyLTEyLTEyIDUuMzcyLTEyIDEyLTEyIDEyIDUuMzcyIDEyIDEyWiIgZmlsbD0iIzA4NjZGRiIvPjxwYXRoIGQ9Ik01LjM5OSAxMS42OTljMC0uNjYyOC41MzczLTEuMiAxLjItMS4yaDEuMTk5OGEuNi42IDAgMCAxIC42LjZ2NS42OTk5YS42LjYgMCAwIDEtLjYuNkg2LjZjLS42NjI3IDAtMS4yLS41MzczLTEuMi0xLjJ2LTQuNDk5OVoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJN MTEuNjk5NSA1LjQwMjR2MS4xOTY4YTMuNTk5NyAzLjU5OTcgMCAwIDEtLjcyMDggMi4xNjFsLS44OTg2IDEuMTk3MmEyLjQgMi40IDAgMCAwLS40ODA1IDEuNDQwN3Y1LjQwMTdhLjYuNiAwIDAgMCAuNi42aDUuMDk5N3YtLjAwMDFoLjU5OThjLjY2MjcgMCAxLjItLjUzNzIgMS4yLTEuMTk5OSAwLS4xOTkuMTA1LS40MDI5LjI3MzUtLjUxMDFhMS4zNDkgMS4zNDkgMCAwIDAgLjYyNjUtMS4xMzk5YzAtLjEwODEtLjAxMjctLjIxMzItLjAzNjctLjMxMzktLjA0NTUtLjE5MTEuMDE0OS0uNDA0My4xNTg2LS41MzgyYTEuNDk2IDEuNDk2IDAgMCAwIC40Nzc5LTEuMDk3OWMwLS4zMzMtLjEwODUtLjY0MDYtLjI5MjEtLjg4OTVhLjUxOTMuNTE5MyAwIDAgMS0uMDc2Ni0uNDYwMSAxLjQ5OTYgMS40OTk2IDAgMCAwIC4wNjg4LS40NTA0YzAtLjgyODQtLjY3MTYtMS41LTEuNS0xLjVoLTIuMzQ5NGEuMy4zIDAgMCAxLS4yOTItLjM0OTJsLjE3MTctMS4wMzAzYTMuMDcxIDMuMDcxIDAgMCAwIC4wMjMtLjg0NGwtLjA1NDUtLjQ5Yy0uMTEzLTEuMDE3LS45NzI2LTEuNzg2NC0xLjk5NTktMS43ODY0YS42MDI0LjYwMjQgMCAwIDAtLjYwMjQuNjAyNVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
              alt="Clean SVG"
            />
          ) : (
            <svg
              className="size-7"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 155.123 155.123"
              xmlSpace="preserve"
              fill="currentColor"
            >
              <g strokeWidth={0} />
              <g strokeLinecap="round" strokeLinejoin="round" />
              <g>
                <g>
                  <g>
                    <path
                      fill="currentColor"
                      d="M150.669,84.068c7.858-7.823,5.43-23.647-8.181-23.647l-35.813,0.024 
            c1.36-7.584,3.33-20.156,3.252-21.343c-0.752-11.242-7.918-24.924-8.228-25.484
            c-1.307-2.434-7.906-5.734-14.547-4.32c-8.586,1.838-9.463,7.315-9.428,8.825
            c0,0,0.37,14.983,0.406,18.981c-4.105,9.016-18.259,32.71-22.549,34.536
            c-1.026-0.621-2.19-0.955-3.401-0.955H6.934C3.091,70.685,0,73.793,0,77.618
            l0.006,62.533c0.269,3.371,3.133,6.015,6.516,6.015h40.64c3.604,0,6.534-2.93,6.534-6.534
            v-2.076c0,0,1.51-0.113,2.196,0.328c2.613,1.659,5.842,3.747,10.054,3.747h60.647
            c22.674,0,20.24-20.126,18.169-22.871c3.831-4.171,6.2-11.528,2.966-17.34
            C150.21,98.789,154.578,91.557,150.669,84.068z M45.766,139.62H6.51V77.212h39.256V139.62z
            M140.09,83.531l-0.37,1.545c10.448,2.971,4.887,15.013-2.608,15.794l-0.37,1.545
            c10.018,2.548,5.239,14.947-2.608,15.794l-0.37,1.539c8.181,1.343,6.2,15.305-6.194,15.305
            l-61.686,0.024c-4.356,0-8.324-4.964-11.528-4.964H51.56V82.075
            c3.485-2.16,7.769-4.964,10.15-6.987c4.499-3.837,22.913-33.593,22.913-37.317
            s-0.406-19.834-0.406-19.834s3.61-4.654,11.671-1.259c0,0,6.784,12.721,7.476,22.859
            c0,0-3.055,20.884-4.696,27.436h42.765 C151.94,66.985,149.935,81.986,140.09,83.531z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          )}
          <span>Like</span>
        </p>
        <p className="cursor-pointer flex flex-col justify-center items-center text-xs text-gray-400 hover:bg-zinc-900 rounded-md px-1 py-2">
          <svg className="size-7" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <g strokeWidth={0} /><g strokeLinecap="round" strokeLinejoin="round" />
            <g><g fill="currentColor" transform="translate(-204, -255)">
              <path d="M228,267 C226.896,267 226,267.896 226,269 C226,270.104 226.896,271 228,271 C229.104,271 230,270.104 230,269 C230,267.896 229.104,267 228,267 Z M220,281 C218.832,281 217.704,280.864 216.62,280.633 L211.912,283.463 L211.975,278.824 C208.366,276.654 206,273.066 206,269 C206,262.373 212.268,257 220,257 C227.732,257 234,262.373 234,269 C234,275.628 227.732,281 220,281 Z M220,255 C211.164,255 204,261.269 204,269 C204,273.419 206.345,277.354 210,279.919 L210,287 L217.009,282.747 C217.979,282.907 218.977,283 220,283 C228.836,283 236,276.732 236,269 C236,261.269 228.836,255 220,255 Z M212,267 C210.896,267 210,267.896 210,269 C210,270.104 210.896,271 212,271 C213.104,271 214,270.104 214,269 C214,267.896 213.104,267 212,267 Z M220,267 C218.896,267 218,267.896 218,269 C218,270.104 218.896,271 220,271 C221.104,271 222,270.104 222,269 C222,267.896 221.104,267 220,267 Z" />
            </g></g>
          </svg>
          <span>Comment</span>
        </p>
        <p className="cursor-pointer flex flex-col justify-center items-center text-xs text-gray-400 hover:bg-zinc-900 rounded-md px-1 py-2">
          <svg className="size-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="{0}" /><g strokeLinecap="round" strokeLinejoin="round" /><g> <g data-name="Share 1"> <g> <path d="M12.223,11.075a.5.5,0,0,0,.7.71l7-7v3.58a.508.508,0,0,0,.5.5.5.5,0,0,0,.5-.5V3.575a.5.5,0,0,0-.5-.5h-4.79a.5.5,0,0,0,0,1h3.58Z" /> <path d="M17.876,20.926H6.124a3.053,3.053,0,0,1-3.05-3.05V6.124a3.053,3.053,0,0,1,3.05-3.05h6.028a.5.5,0,0,1,0,1H6.124a2.053,2.053,0,0,0-2.05,2.05V17.876a2.053,2.053,0,0,0,2.05,2.05H17.876a2.053,2.053,0,0,0,2.05-2.05V11.849a.5.5,0,0,1,1,0v6.027A3.053,3.053,0,0,1,17.876,20.926Z" /> </g> </g> </g></svg>
          <span>Share</span>
        </p>
        <p className="cursor-pointer flex flex-col justify-center items-center text-xs text-gray-400 hover:bg-zinc-900 rounded-md px-1 py-2">
          <svg className="size-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g strokeWidth={0} /><g strokeLinecap="round" strokeLinejoin="round" /><g> <title /> <g> <g> <path d="M8,12a2,2,0,1,1-2-2A2,2,0,0,1,8,12Zm10-2a2,2,0,1,0,2,2A2,2,0,0,0,18,10Zm-6,0a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z" /> </g> </g> </g></svg>
          <span>More</span>
        </p>
      </div>
    </div>
  );
}
