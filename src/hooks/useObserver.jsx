import { useEffect, useRef } from "react";

export function useObserver(isLoading, canLoad, ref, callback) {
    let observer = useRef()

    useEffect(() => {
        
        // проверяем загружаются ли посты и убираем прошлый обсервер
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        // создаем обсервер только в случае если посты уже загрузились

        function observer_callback(entries, observer) {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        }

        // создаем новый обсервер
        observer.current = new IntersectionObserver(observer_callback)

        // крепим его к диву под постами
        observer.current.observe(ref.current)


    }, [isLoading])
}

