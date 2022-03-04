const algorithmList = [
    '수학', '구현', '다이나믹 프로그래밍', '그래프 이론', '자료 구조',
    '문자열', '그리디 알고리즘', '브루트포스 알고리즘', '그래프 탐색',
    '정렬', '정수론', '트리', '세그먼트 트리', '기하학', '이분 탐색',
    '너비 우선 탐색', '사칙연산', '시뮬레이션', '깊이 우선 탐색', '조합론',
    '애드 혹', '누적 합', '구성적', '많은 조건 분기', '비트마스킹',
    '다익스트라', '파싱', '분리 집합', '백트래킹', '분할 정복', '스위핑',
    '해시를 사용한 집합과 맵', '트리를 사용한 집합과 맵', '우선순위 큐',
    '트리에서의 다이나믹 프로그래밍', '스택', '두 포인터', '소수 판정',
    '최대 유량', '느리게 갱신되는 세그먼트 트리', '게임 이론',
    '비트필드를 이용한 다이나믹 프로그래밍', '임의 정밀도 / 큰 수 연산',
    '분할 정복을 이용한 거듭제곱', '오프라인 쿼리', '재귀', '확률론',
    '에라토스테네스의 체', '매개 변수 탐색', '최소 스패닝 트리', '이분 매칭',
    '배낭 문제', '최소 공통 조상', '런타임 전의 전처리', '해싱', '위상 정렬',
    '값 / 좌표 압축', '유클리드 호제법', '강한 연결 요소', '플로이드-와샬',
    '포함 배제의 원리', '볼록 껍질', '선형대수학', '트라이', '희소 배열',
    '고속 푸리에 변환', '접미사 배열과 LCP 배열', '제곱근 분할법',
    '작은 집합에서 큰 집합으로 합치는 테크닉', '볼록 껍질을 이용한 최적화',
    'KMP', '슬라이딩 윈도우', '최소 비용 최대 유량', '중간에서 만나기', '덱',
    '무작위화', '미적분학', 'Heavy-light 분할', '3차원 기하학',
    '스프라그-그런디 정리', '오일러 경로 테크닉',
    '가장 긴 증가하는 부분 수열: O(n log n)', '선분 교차 판정', '센트로이드',
    '센트로이드 분할', '단절점과 단절선', '최대 유량 최소 컷 정리', '가우스 소거법',
    '2-sat', '피타고라스 정리', '삼분 탐색', '순열 사이클 분할', '오일러 경로', '큐',
    '비트 집합', '퍼시스턴트 세그먼트 트리', '휴리스틱', '선인장', '물리학',
    '중국인의 나머지 정리', '이중 연결 요소', "mo's", '스플레이 트리', '페르마의 소정리',
    '확장 유클리드 호제법', '모듈로 곱셈 역원', '분할 정복을 사용한 최적화',
    '0-1 너비 우선 탐색', '벨만-포드', '평면 그래프', '아호-코라식', '오일러 피 함수',
    '병렬 이분 탐색', '다차원 세그먼트 트리', '머지 소트 트리', '오일러 지표 (χ=V-E+F)',
    '기댓값의 선형성', '벌래캠프-매시', '볼록 다각형 내부의 점 판정', '연결 리스트',
    '링크/컷 트리', '정규 표현식', '라빈-카프', '회전하는 캘리퍼스', '외판원 순회 문제',
    '다각형의 넓이', '덱을 이용한 다이나믹 프로그래밍', '매내처',
    '커넥션 프로파일을 이용한 다이나믹 프로그래밍', '뫼비우스 반전 공식',
    '함수 개형을 이용한 최적화', '트리 동형 사상', 'Aliens 트릭', '밀러-라빈 소수 판별법',
    '수치해석', '오프라인 동적 연결성 판정', '홀의 결혼 정리', '인터프리터', '폴라드 로',
    '이분 그래프', '선형 계획법', '쌍대 그래프', '비둘기집 원리', '오목 다각형 내부의 점 판정',
    '뤼카 정리', '쌍대성', '매트로이드', '보로노이 다이어그램', '번사이드 보조정리', '키타마사',
    '크누스 최적화', '헝가리안', '이산 로그', '일반적인 매칭', '최소 외접원', 'z', '통계학',
    '도미네이터 트리', '단조 큐를 이용한 최적화', '회문 트리', '안정 결혼 문제', '담금질 기법',
    '양방향 탐색', '반평면 교집합', '로프', '스토어-바그너', '히르쉬버그', '이산 제곱근',
    '4차원 이상의 기하학', '접미사 트리', '유향 최소 신장 트리', '베이즈 정리', '그린 정리',
    '픽의 정리', '크누스 X', '탑 트리', '춤추는 링크', '보이어-무어 다수결 투표', '트리 압축',
    '생성 함수', 'a*', '레드-블랙 트리', '델로네 삼각분할', '서큘레이션', '이산 k제곱근',
    '다중 대입값 계산', '차분 공격'
];

function setData(key, value) {
    chrome.storage.sync.set({ [key]: value }, () => { console.log('ok') });
}

function createPool() {
    let printer = '';
    chrome.storage.sync.get('algorithm', (loaded) => {
        loaded = new Set(loaded['algorithm']);
        const poolOrigin = document.getElementById('pool');

        for (let i = 0; i < algorithmList.length; i++) {
            printer += `
                <div class="algorithm-block">
                    <label>
                        <span>${algorithmList[i]}</span>
                        <input class="hidden checkbox" type="checkbox" no="${i}" ${loaded.has(i) ? 'checked' : ''}/>
                        <span class="checkbox-visual"></span>
                    </label>
                </div>
            `;
        }

        poolOrigin.innerHTML = printer;

        document.querySelectorAll('.checkbox').forEach((item) => {
            item.addEventListener('change', () => {
                updateAlgorithmData(parseInt(item.getAttribute('no')), item.checked);
            });
        });
    });
}

function updateAlgorithmData(id, state) {
    chrome.storage.sync.get('algorithm', (loaded) => {
        loaded = new Set(loaded['algorithm']);

        if (state)
            loaded.add(id);
        else
            loaded.delete(id);

        setData('algorithm', [...loaded]);
    });
}

function loadSettings() {
    chrome.storage.sync.get('settings', (loaded) => {
        loaded = loaded['settings'];
        if (loaded.length !== 4)
            loaded = [1, 1, 2, 1];

        for (let i = 0; i < 4; i++) {
            let radioList = document.querySelectorAll(`.radio[name="${i}"]`);
            radioList[loaded[i]].checked = true;
        }
    });

    document.querySelectorAll('.radio').forEach((item) => {
        item.addEventListener('change', () => {
            console.log('value change detected!');
            updateSettingsData(
                parseInt(item.getAttribute('name')),
                parseInt(item.getAttribute('value')),
                item.checked
            );
        });
    });
}

function updateSettingsData(name, value, state) {
    console.log('update start', name, value, state);
    chrome.storage.sync.get('settings', (loaded) => {
        if (!state)
            return;

        loaded = loaded['settings'];

        if (loaded.length !== 4)
            loaded = [1, 1, 2, 1];

        console.log('before', loaded);
        loaded[name] = value;
        console.log('after', loaded);

        setData('settings', [...loaded]);
    });
}

window.onload = () => {
    createPool();
    loadSettings();
}
